module.exports = {
  token: process.env.GITLAB_TOKEN,
  onboardingConfig: {
    globalExtends: ["config:base"],
  },

  platform: "gitlab",

  hostRules: [
    {
      matchHost: "registry.gitlab.com",
      username: process.env.GITLAB_USERNAME,
      password: process.env.GITLAB_TOKEN,
    },
  ],

  repositories: [process.env.PATH_TO_REPO],
  baseBranches: [process.env.BASE_BRANCH],

  "helm-values": {
    fileMatch: ["helmfiles\\/dev\\/.+/*values\\.yaml"],
  },

  enabledManagers: ["helm-values"],

  packageRules: [
    {
      groupName: "exclude all of these",
      matchManagers: ["helm-values"],
      matchPaths: ["**"],
      dependencyDashboardApproval: true,
    },
    {
      groupName: "include only these",
      matchManagers: ["helm-values"],
      matchPaths: ["helmfiles/dev/" + process.env.DO_UPDATE_NAME],
      dependencyDashboardApproval: true,
    },
  ],
};
