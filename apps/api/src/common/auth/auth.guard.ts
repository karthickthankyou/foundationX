import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { GqlExecutionContext } from '@nestjs/graphql'
import { JwtService } from '@nestjs/jwt'
import { PrismaService } from '../prisma/prisma.service'
import { Role } from '@foundation/util/types'

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private jwtService: JwtService,
    private prisma: PrismaService,
  ) {}

  async userHasRequiredRole(uid: string, requiredRole: Role): Promise<boolean> {
    let userExists

    switch (requiredRole) {
      case 'admin':
        // userExists = await this.prisma.admin.findUnique({
        //   where: { uid },
        // })
        break
      case 'manager':
        // userExists = await this.prisma.reporter.findUnique({
        //   where: { uid },
        // })
        break
    }

    return Boolean(userExists)
  }

  bypassWithApiSecret(req: any) {
    const apiSecret = req.headers['X-API-Secret']
    if (!apiSecret) {
      return false
    }
    if (apiSecret === process.env.INTERNAL_API_SECRET) {
      return true
    } else {
      throw new ForbiddenException('Nope.')
    }
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context)
    const req = ctx.getContext().req

    if (this.bypassWithApiSecret(req)) {
      return true
    }

    const bearerHeader = req.headers.authorization
    const token = bearerHeader && bearerHeader.split(' ')[1]

    if (!token) {
      throw new UnauthorizedException('No token provided.')
    }

    try {
      // Decode and verify JWT.
      const user = await this.jwtService.verify(token, {
        secret: process.env.NEXTAUTH_SECRET,
      })

      // Attach user to request.
      req.user = user
    } catch (err) {
      console.log('err', err)
      //   throw new UnauthorizedException()
    }

    const allowUnauthenticated = this.reflector.getAllAndOverride<boolean>(
      'allowUnauthenticated',
      [context.getHandler(), context.getClass()],
    )

    if (!req.user && !allowUnauthenticated) {
      throw new UnauthorizedException()
    }

    const requiredRoles = this.reflector.getAllAndOverride<Role[]>('roles', [
      context.getHandler(),
      context.getClass(),
    ])

    if (!requiredRoles || requiredRoles?.length === 0) {
      return true
    }
    const roleCheckPromises = requiredRoles.map((role) =>
      this.userHasRequiredRole(req.user.uid, role),
    )

    const roleCheckResults = await Promise.all(roleCheckPromises)
    return roleCheckResults.some((result) => result)
  }
}
