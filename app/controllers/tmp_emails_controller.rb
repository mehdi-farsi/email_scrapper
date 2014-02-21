class TmpEmailsController < ApplicationController
  def save
    @tmp_email = TmpEmail.create({email: params[:email]})
    p @tmp_email
    render nothing: true, status: :created
  end
end
