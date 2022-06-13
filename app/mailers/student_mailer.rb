class StudentMailer < ApplicationMailer
  def create_confirmation
    @student = params[:student]

    mail(to: @student.parents_email,
         subject: "Olá #{@student.parents_name} seu acesso foi criado!")
  end
end
