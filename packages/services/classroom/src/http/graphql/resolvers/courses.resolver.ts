import { UnauthorizedException, UseGuards } from '@nestjs/common'
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'

import { Course } from '@models/course'

import { AuthorizationGuard } from '@http/auth/authorization.guard'
import { AuthUser, CurrentUser } from '@http/auth/cuurent-user'

import { CoursesService } from '@services/courses.service'
import { EnrollmentsService } from '@services/enrollments.service'
import { StudentsService } from '@services/students.service'

import { CreateCourseInput } from '../inputs/create-course-input'

@Resolver(() => Course)
export class CoursesResolver {
  constructor(
    private coursesService: CoursesService,
    private studentsServices: StudentsService,
    private enrollmentsServices: EnrollmentsService
  ) {}

  @UseGuards(AuthorizationGuard)
  @Query(() => [Course])
  courses() {
    return this.coursesService.listAllCourses()
  }

  @UseGuards(AuthorizationGuard)
  @Query(() => Course)
  async course(@Args('id') id: string, @CurrentUser() user: AuthUser) {
    const student = await this.studentsServices.getStudentByAuthUserId(user.sub)

    if (!student) {
      throw new Error('Student not found.')
    }

    const enrollment = await this.enrollmentsServices.getByCourseAndStudentId({
      courseId: id,
      studentId: student.id
    })

    if (!enrollment) {
      throw new UnauthorizedException()
    }

    return this.coursesService.getCourseById(id)
  }

  @UseGuards(AuthorizationGuard)
  @Mutation(() => Course)
  async createCourse(@Args('data') data: CreateCourseInput) {
    return this.coursesService.createCourse(data)
  }
}
