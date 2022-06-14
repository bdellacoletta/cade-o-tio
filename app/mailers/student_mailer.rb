class StudentMailer < ApplicationMailer
  def create_confirmation
    @student = params[:student]

    mail(to: @student.parents_email,
         subject: "app cadê o tio? 🚌")
  end
end
