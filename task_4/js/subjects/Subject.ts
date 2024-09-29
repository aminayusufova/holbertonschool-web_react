namespace Subjects {
    export class Subject {
        teacher: TeacherInterface | undefined;

        set setTeacher(teacher: TeacherInterface) {
            this.teacher = teacher;
        }
    }
}