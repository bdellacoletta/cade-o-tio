class UserMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.user_mailer.welcome.subject
  #
  def welcome
    @parents_email = params[:parents_email]
    mail(to: @parents_email.email, subject: 'Welcome to Le Wagon')
  end
end
