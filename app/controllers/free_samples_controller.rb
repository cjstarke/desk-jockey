class FreeSamplesController < ApplicationController
  before_action :set_free_sample, only: [:show, :update, :destroy]

  # GET /free_samples
  def index
    @free_samples = FreeSample.all

    render json: @free_samples
  end

  # GET /free_samples/1
  def show
    render json: @free_sample
  end

  # POST /free_samples
  def create
    @free_sample = FreeSample.new(free_sample_params)

    if @free_sample.save
      render json: @free_sample, status: :created, location: @free_sample
    else
      render json: @free_sample.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /free_samples/1
  def update
    if @free_sample.update(free_sample_params)
      render json: @free_sample
    else
      render json: @free_sample.errors, status: :unprocessable_entity
    end
  end

  # DELETE /free_samples/1
  def destroy
    @free_sample.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_free_sample
      @free_sample = FreeSample.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def free_sample_params
      params.require(:free_sample).permit(:name, :microwave, :stapler, :pentap, :scissors, :spacebar, :mouseclick)
    end
end
