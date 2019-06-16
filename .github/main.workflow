workflow "Build and deploy" {
  resolves = [
    "Build static site and deploy to gh-pages",
  ]
  on = "push"
}

action "Filter master branch" {
  uses = "actions/bin/filter@master"
  args = "branch master"
}

action "Install theme(s)" {
  uses = "pxgamer/composer-action@master"
  args = "install"
}

action "Build Cecil static site" {
  uses = "Cecilapp/Cecil-Action@master"
  needs = [
    "Filter master branch",
    "Install theme(s)",
  ]
  args = "--baseurl=https://narno.com/"
}

action "Build static site and deploy to gh-pages" {
  uses = "Cecilapp/GHPages-deploy-Action@master"
  needs = "Build Cecil static site"
  env = {
    BUILD_DIR = "_site/"
    CNAME = "narno.com"
    NO_JEKYLL = "toutafé !"
  }
  secrets = ["GITHUB_TOKEN"]
}
