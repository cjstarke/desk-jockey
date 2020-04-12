require 'test_helper'

class FreeSamplesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @free_sample = free_samples(:one)
  end

  test "should get index" do
    get free_samples_url, as: :json
    assert_response :success
  end

  test "should create free_sample" do
    assert_difference('FreeSample.count') do
      post free_samples_url, params: { free_sample: { microwave: @free_sample.microwave, mouseclick: @free_sample.mouseclick, name: @free_sample.name, pentap: @free_sample.pentap, scissors: @free_sample.scissors, spacebar: @free_sample.spacebar, stapler: @free_sample.stapler } }, as: :json
    end

    assert_response 201
  end

  test "should show free_sample" do
    get free_sample_url(@free_sample), as: :json
    assert_response :success
  end

  test "should update free_sample" do
    patch free_sample_url(@free_sample), params: { free_sample: { microwave: @free_sample.microwave, mouseclick: @free_sample.mouseclick, name: @free_sample.name, pentap: @free_sample.pentap, scissors: @free_sample.scissors, spacebar: @free_sample.spacebar, stapler: @free_sample.stapler } }, as: :json
    assert_response 200
  end

  test "should destroy free_sample" do
    assert_difference('FreeSample.count', -1) do
      delete free_sample_url(@free_sample), as: :json
    end

    assert_response 204
  end
end
