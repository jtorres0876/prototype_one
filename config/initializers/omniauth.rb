OmniAuth.config.logger = Rails.logger

Rails.application.config.middleware.use OmniAuth::Builder do
  provider 	:facebook, '681469378534074', '0652489516461a84fa14d6be35d83a21',	
  			#:facebook, '115393751997458', '5722ed4409038a1a77e881ff59ff5520',
  			:client_options => {:ssl => {:ca_path => "/etc/ssl/certs"}},
  			:scope => 'email, publish_actions, manage_notifications'
end