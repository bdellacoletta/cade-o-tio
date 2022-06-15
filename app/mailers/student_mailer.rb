class StudentMailer < ApplicationMailer
  def create_confirmation
    @student = params[:student]

    mail(to: @student.parents_email,
         subject: "Seu acesso foi criado - cadê o tio? 🚌")
  end
end
