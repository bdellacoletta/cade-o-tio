class StudentsController < ApplicationController
  before_action :set_student, only: %i[edit show update destroy]
  before_action :set_itinerary, only: %i[index create new destroy]

  def index
    @students = Student.where(itinerary: @itinerary)
  end

  def show
  end

  def new
    @student = Student.new
    @student.itinerary = @itinerary
  end

  def create
    @student = Student.new(student_params)
    @student.itinerary = @itinerary
    if @student.save
      redirect_to itinerary_students
    else
      render :new
    end
  end

  def edit
  end

  def update
    @student.update(student_params)
  end

  def destroy
    @student.destroy
    redirect_to itinerary_students(@itinerary)
  end

  private

  def student_params
    params.require(:student).permit(:child_name, :child_address, :sequence, :parents_name, :parents_email)
  end

  def set_student
    @student = Student.find(params[:id])
  end

  def set_itinerary
    @itinerary = Itinerary.find(params[:itinerary_id])
  end
end
