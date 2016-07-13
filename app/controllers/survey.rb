post '/survey/new' do
  erb :survey
end

post '/create' do 
  # question_name = params[]
  # survey = Survey.create(name: survey_name, description: survey_description)
  survey_name = params[:survey_name]
  survey_description = params[:survey_description]
  survey = Survey.create(name: survey_name, description: survey_description, users_id: session[:id])
  survey_data = JSON.parse(params[:inf])
  survey_data.each_pair do |survey_question, survey_options|
    question = Question.create(description: survey_question, surveys_id: survey.id)
    survey_options.each do |survey_option|
      option = Option.create(description: survey_option, questions_id: question.id)
    end
  end
end