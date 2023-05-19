namespace :build do
  desc "Build CSS files"
  task :css do
    `yarn build`
  end

  desc "Build JavaScript files"
  task :js do
    # when needed
  end
end

task default: %i[build:css build:js]
