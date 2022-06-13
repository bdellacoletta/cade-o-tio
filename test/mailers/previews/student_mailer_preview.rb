# Preview all emails at http://localhost:3000/rails/mailers/student_mailer
class StudentMailerPreview < ActionMailer::Preview
  def create_confirmation
    student = Student.first

    StudentMailer.with(student: student).create_confirmation
  end
end
