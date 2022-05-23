import { UseGuards } from '@nestjs/common'
import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'

import { Student } from '@models/student'

import { AuthorizationGuard } from '@http/auth/authorization.guard'
import { AuthUser, CurrentUser } from '@http/auth/cuurent-user'

import { EnrollmentsService } from '@services/enrollments.service'
import { StudentsService } from '@services/students.service'

@Resolver(() => Student)
export class StudentsResolver {
  constructor(
    private studentsService: StudentsService,
    private enrollmentsService: EnrollmentsService
  ) {}

  @UseGuards(AuthorizationGuard)
  @Query(() => Student)
  me(@CurrentUser() user: AuthUser) {
    return this.studentsService.getStudentByAuthUserId(user.sub)
  }

  @UseGuards(AuthorizationGuard)
  @Query(() => [Student])
  students() {
    return this.studentsService.listAllStudents()
  }

  @ResolveField()
  enrollments(@Parent() student: Student) {
    return this.enrollmentsService.listEnrollmentsByStudentId(student.id)
  }
}
