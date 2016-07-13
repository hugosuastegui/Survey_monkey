get '/survey/new' do
  erb :survey
end

post '/create' do 
  # question_name = params[]
  # survey = Survey.create(name: survey_name, description: survey_description)
  survey_data = JSON.parse(params[:inf])
  p  survey_data["survey_name"]
  survey = Survey.create(name: survey_data["survey_name"], user_id: session[:id])
  survey_data.delete("survey_name")
  survey_data.each_pair do |survey_question, survey_options|
    question = Question.create(description: survey_question, survey_id: survey.id)
    survey_options.each do |survey_option|
      option = Option.create(description: survey_option, question_id: question.id)
    end
  end
end

get '/surveys/:id' do
  @options = []
  id = params[:id] 
  @survey = Survey.find(id)
  @questions = Question.where(survey_id: id)
  @questions.each do |question|
    option = Option.where(question_id: question.id)
    option.each do |opt|
      @options << opt 
    end
  end
  erb :specific_survey
end