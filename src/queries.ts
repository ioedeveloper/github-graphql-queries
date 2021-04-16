import { queryVariables } from ".";

export * from './user'
export * from './discussion'
export * from './nodes'
export * from './enterprise'
export * from "./organization"

/**
 * @description Github Graphql Query for SecurityVulnerabilities
 * @queryArguments 
 ** ecosystem "NPM" | "RUBYGEMS" | "MAVEN" | "COMPOSER" | "NUGET" | "PIP"
 ** severities "LOW" | "MODERATE" | "HIGH" | "CRITICAL"
 ** after string
 ** before string
 ** first number
 ** last number
 * @queryVariables
 ** @fields
 ** Vulnerability
 */

export const SecurityVulnerabilities = (params: queryVariables.VulnerabilitiesFields) => `
	{
		securityVulnerabilities(${params.first ? `first: ${params.first}` : ""} ${params.last ? `last: ${params.last}` : ""} ${params.after ? `, after: "${params.after}"` : ""} ${params.before ? `, before: "${params.before}"` : ""}, 
    ${params.orderBy || params.direction ? `orderBy: {field: ${params.orderBy}, direction: ${params.direction}}` : ""}) {
				edges {
					node {
						${params.fields}
					}
				}
				nodes {
					${params.fields}
				}
				${params.pageInfo ? params.pageInfo : ""}
				totalCount
		}
	}
	
`

/**
 * @description Github Graphql Query for SecurityAdvisory
 * @field
 ** SecurityAdvisory
 */

export const SecurityAdvisoryQuery = (ghsaId: string, fields: string) => `
    {
		securityAdvisory (ghsaId: "${ghsaId}") {
			${fields}
		}
	}
 `

export * from "./user"
export * from "./respository"

/**
 * @description Github Graphql SecurityAdvisories  
 * @queryVariables
 ** type "CVE" | "GHSA"
 ** value string
 ** orderBy "PUBLISHED_AT" | "UPDATED_AT"
 ** publishedSince string
 ** updatedSince string
 * @fields 
 ** SecurityAdvisory
*/

export const SecurityAdvisories = (params: queryVariables.SecurityAdvisoriesFields) => `
    {
		securityAdvisories(first: ${params.first} ${params.after ? `, after: "${params.after}" ` : ""} ${params.before ? `, after: "${params.before}" ` : ""} ${params.last ? `, last: ${params.last}` : ""}
		${params.publishedSince ? `, publishedSince: "${params.publishedSince}" ` : ""} ${params.updatedSince ? `, updatedSince: "${params.updatedSince}" ` : ""} 
		${params.value || params.type ? `, identifier: {type: ${params.type}, value: "${params.value}"}` : ""}) {
			edges {
				cursor
				node {
					${params.fields}
				}
			}
			nodes {
				${params.fields}
			}
			${params.pageInfo ? params.pageInfo : ""}
			totalCount
		}
	}
`

/**
 * @description Github Graphql Query for TopicQuery
 * @fields
 ** Topic
 */

export const TopicQuery = (name: string, fields: string) => `
  {
    topic(name: "${name}") {
      ${fields}
    }
  }
`

/**
 * @description Github Graphql Query for SponsorsListing
 * @queryVariables
 ** slug string
 * @fields
 ** activeGoal {	Goal }
 ** createdAt
 ** fullDescription
 ** fullDescriptionHTML
 ** id
 ** name
 ** shortDescription
 ** slug
 ** Tiers
 */

export const SponsorsListing = (slug: string, fields: string) => `
	{
		sponsorsListing(slug: "${slug}") {
			${fields}
		}
	}

`

/**
 * @description Github Graphql Query for Sponsorables
 * @queryVariables
 ** dependencyEcosystem "RUBYGEMS" | "NPM" | "PIP" | "MAVEN" | "NUGET" | "COMPOSER"
 ** onlyDependencies boolean
 ** orgLoginForDependencies string
 ** orderBy "LOGIN"
 ** direction "ASC" | "DESC"
 * @fields
 ** onOrganization
 ** onUser
 */

export const Sponsorables = (params: queryVariables.Sponsorables) => `
 	{
		sponsorables(${params.first ? `first: ${params.first}` : ""} ${params.last ? `last: ${params.last}` : ""} ${params.first ? `first: ${params.first}` : ""} ${params.dependencyEcosystem ? `, dependencyEcosystem: ${params.dependencyEcosystem}` : ""} ${params.onlyDependencies ? `, ${params.onlyDependencies}` : ""} ${params.after ? `, ${params.after}` : ""} ${params.before ? `, ${params.before}` : ""}
    ${params.orderBy || params.direction ? `orderBy: {field: ${params.orderBy} direction: ${params.direction}}` : ""} 
    ${params.orgLoginForDependencies ? `, "${params.orgLoginForDependencies}"` : ""}) {
			edges {
				cursor
				node {
					${params.fields}
				}
			}
			nodes {
				${params.fields}
			}
			${params.pageInfo ? params.pageInfo : ""}
			totalCount
		}
	}
`


/**
 * @description Github Graphql Query for SecurityVulnerabilities
 * @queryArguments 
 * ecosystem "NPM" | "RUBYGEMS" | "MAVEN" | "COMPOSER" | "NUGET" | "PIP"
 * severities "LOW" | "MODERATE" | "HIGH" | "CRITICAL"
 * after string
 * before string
 * first number
 * last number
 * @queryVariables
 * fields Vulnerability
 * }
 */
export const Viewer = (fields: string) => `
    query {
      viewer {
        ${fields}
      }
    }
`

/**
* @description Github Graphql Query for Search
* @defaultVariables totalCount
* @queryVariables 
** after string 
** before string
** first number
** last number
** query string
* @fields 
** onApp
** onIssue 
** onMarketplaceListing
** onOrganization 
** onPullRequest
** onRepository 
** onUser
** type "ISSUE" | "REPOSITORY" | "USER"
** codeCount
** issueCount
** repositoryCount
** userCount
** wikiCount
*/

export const Search = (params: queryVariables.Search) => `
 	{
		search(query: "${params.query}", first: ${params.first} ${params.type ? `, type: ${params.type}` : ""} ${params.after ? `, after: ${params.after}` : ""} ${params.before ? `, before: ${params.before}` : ""} ${params.last ? `, last: ${params.last}` : ""}) {
			edges {
				cursor
				node {
				   ${params.fields}
				}
			 }
		 
			 nodes {
				${params.fields}
			 }
			 ${params.pageInfo ? params.pageInfo : ""}
			codeCount
			issueCount
			repositoryCount
			userCount
			wikiCount
		}
   }
`

/**
 * @description Github Graphql Query for Resource
 * @fields
** url
** resourcePath 
** onOrganization
** onRelease 
** onUser 
** onIssue 
** onPullRequest 
** onRepository 
** onTeamDiscussion 
** onTeamDiscussionComment 
** onCommit 
** onCheckRun 
** onMillestone 
** onRepositoryTopic 
** onPullRequestCommit
** onMannequin 
** onBot 
** onClosedEvent 
** onCrossReferencedEvent 
** onMergedEvent 
** onReviewDismissedEvent 
** onConvertToDraftEvent 
** onReadyForReviewEvent 
** onGist 
*/

export const Resource = (url: string, fields: string) => `
 	{
		resource(url: "${url}") {
			${fields}
		}
 	}
`;

/**
 * @description Github Graphql Query for RepositoryOwner
 * @queryVariables login string
 * @fields
 ** onOrganization onUser
 ** Repository
 ** Repositories
 ** avatarUrl
 ** id
 ** login
 ** resourcePath
 ** url
 */

export const RepositoryOwner = (login: string, fields: string) => `
 	{
		 repositoryOwner (login: "${login}") {
			${fields}
 		}
	}
`;

/**
 * @description Github Graphql Query for Repository
 * @queryVariables 
 ** name string
 ** owner string 
 * @fields
 * Repository 
*/
export const RepositoryQuery = (name: string, owner: string, fields: string) => `
    {
      repository(name: "${name}", owner: "${owner}") {
        ${fields}
      }
    }
 `

/**
 * @description Github Graphql Query for Organization
 * @fields
 ** OrganizationFields
 */

export const OrganisationQuery = (login: string, fields: string) => `
    {
      organization (login: "${login}"){
        ${fields}
      }
    }
`

/**
 * @description Github Graphql Query for repository content (files and directories)
 */
export const RepositoryContent = `
    query($repositoryOwner: String!, $repositoryName: String!){
        repository(owner: $repositoryOwner, name: $repositoryName){
            defaultBranchRef{
            ... on Ref{
                    target{
                    ... on Commit{
                            files: tree{
                                entries{
                                    name
                                    type
                                    child: object{
                                        ... on Blob{
                                          text
                                        }
                                        ... on Tree{
                                          entries{
                                            name
                                            type
                                            child: object{
                                              ... on Blob{
                                                text
                                              }
                                              ... on Tree{
                                                entries{
                                                  name
                                                  type
                                                  child: object{
                                                    ... on Blob{
                                                      text
                                                    }
                                                    ... on Tree{
                                                      entries{
                                                        name
                                                        type
                                                        child: object{
                                                          ... on Blob{
                                                            text
                                                          }
                                                          ... on Tree{
                                                            entries{
                                                              name
                                                              type
                                                              child: object{
                                                                ... on Blob{
                                                                  text
                                                                }
                                                                ... on Tree{
                                                                  entries{
                                                                    name
                                                                    type
                                                                    child: object{
                                                                      ... on Blob{
                                                                        text
                                                                      }
                                                                      ... on Tree{
                                                                        entries{
                                                                          name
                                                                          type
                                                                          child: object{
                                                                            ... on Blob{
                                                                              text
                                                                            }
                                                                            ... on Tree{
                                                                              entries{
                                                                                name
                                                                                type
                                                                                child: object{
                                                                                  ... on Blob{
                                                                                    text
                                                                                  }
                                                                                  ... on Tree{
                                                                                    entries{
                                                                                      name
                                                                                      type
                                                                                      child: object{
                                                                                        ... on Blob{
                                                                                          text
                                                                                        }
                                                                                        ... on Tree{
                                                                                          entries{
                                                                                            name
                                                                                            type
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`

/**
 * @description Github Graphql Query for repository directories only (content excluded)
 */
export const RepositoryDirectories = `
    query($repositoryOwner: String!, $repositoryName: String!){
        repository(owner: $repositoryOwner, name: $repositoryName){
            defaultBranchRef{
            ... on Ref{
                    target{
                    ... on Commit{
                            files: tree{
                                entries{
                                    name
                                    type
                                    child: object{
                                        ... on Tree{
                                          entries{
                                            name
                                            type
                                            child: object{
                                              ... on Tree{
                                                entries{
                                                  name
                                                  type
                                                  child: object{
                                                    ... on Tree{
                                                      entries{
                                                        name
                                                        type
                                                        child: object{
                                                          ... on Tree{
                                                            entries{
                                                              name
                                                              type
                                                              child: object{
                                                                ... on Tree{
                                                                  entries{
                                                                    name
                                                                    type
                                                                    child: object{
                                                                      ... on Tree{
                                                                        entries{
                                                                          name
                                                                          type
                                                                          child: object{
                                                                            ... on Tree{
                                                                              entries{
                                                                                name
                                                                                type
                                                                                child: object{
                                                                                  ... on Tree{
                                                                                    entries{
                                                                                      name
                                                                                      type
                                                                                      child: object{
                                                                                        ... on Tree{
                                                                                          entries{
                                                                                            name
                                                                                            type
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`

/**
 * @description Github Graphql Query for list of repository branches
 * @queryVariable first: 10, after: CURSOR
 */
export const Branches = `
  query($repositoryOwner: String!, $repositoryName: String!, $first: Int, $after: String, $before: String, $last: Int, $refPrefix: String = "refs/heads/"){
    repository(owner: $repositoryOwner, name: $repositoryName){
      branches: refs(refPrefix: $refPrefix, first: $first, after: $after, last: $last, before: $before){
        edges{
          node{
            id
            name
            prefix
          }
          cursor
        }
        pageInfo{
          endCursor
          hasNextPage
          hasPreviousPage
          startCursor
        }
        totalCount
      }
    }
  }
`

/**
 * @description Github Graphql Query for repository branch content (files and directories)
 * @queryVariable qualifiedName: "refs/heads/master"
 */
export const BranchContent = `
    query($repositoryOwner: String!, $repositoryName: String!, $qualifiedName: String!){
        repository(owner: $repositoryOwner, name: $repositoryName){
            branch: ref(qualifiedName: $qualifiedName){
            ... on Ref{
                    target{
                    ... on Commit{
                            files: tree{
                                entries{
                                    name
                                    type
                                    child: object{
                                        ... on Blob{
                                          text
                                        }
                                        ... on Tree{
                                          entries{
                                            name
                                            type
                                            child: object{
                                              ... on Blob{
                                                text
                                              }
                                              ... on Tree{
                                                entries{
                                                  name
                                                  type
                                                  child: object{
                                                    ... on Blob{
                                                      text
                                                    }
                                                    ... on Tree{
                                                      entries{
                                                        name
                                                        type
                                                        child: object{
                                                          ... on Blob{
                                                            text
                                                          }
                                                          ... on Tree{
                                                            entries{
                                                              name
                                                              type
                                                              child: object{
                                                                ... on Blob{
                                                                  text
                                                                }
                                                                ... on Tree{
                                                                  entries{
                                                                    name
                                                                    type
                                                                    child: object{
                                                                      ... on Blob{
                                                                        text
                                                                      }
                                                                      ... on Tree{
                                                                        entries{
                                                                          name
                                                                          type
                                                                          child: object{
                                                                            ... on Blob{
                                                                              text
                                                                            }
                                                                            ... on Tree{
                                                                              entries{
                                                                                name
                                                                                type
                                                                                child: object{
                                                                                  ... on Blob{
                                                                                    text
                                                                                  }
                                                                                  ... on Tree{
                                                                                    entries{
                                                                                      name
                                                                                      type
                                                                                      child: object{
                                                                                        ... on Blob{
                                                                                          text
                                                                                        }
                                                                                        ... on Tree{
                                                                                          entries{
                                                                                            name
                                                                                            type
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`

/**
 * @description Github Graphql Query for repository branch directories only (content excluded)
 * @queryVariable qualifiedName: "refs/heads/master"
 */
export const BranchDirectories = `
    query($repositoryOwner: String!, $repositoryName: String!, $qualifiedName: String!){
      repository(owner: $repositoryOwner, name: $repositoryName){
          branch: ref(qualifiedName: $qualifiedName){
            ... on Ref{
                    target{
                    ... on Commit{
                            files: tree{
                                entries{
                                    name
                                    type
                                    child: object{
                                        ... on Tree{
                                          entries{
                                            name
                                            type
                                            child: object{
                                              ... on Tree{
                                                entries{
                                                  name
                                                  type
                                                  child: object{
                                                    ... on Tree{
                                                      entries{
                                                        name
                                                        type
                                                        child: object{
                                                          ... on Tree{
                                                            entries{
                                                              name
                                                              type
                                                              child: object{
                                                                ... on Tree{
                                                                  entries{
                                                                    name
                                                                    type
                                                                    child: object{
                                                                      ... on Tree{
                                                                        entries{
                                                                          name
                                                                          type
                                                                          child: object{
                                                                            ... on Tree{
                                                                              entries{
                                                                                name
                                                                                type
                                                                                child: object{
                                                                                  ... on Tree{
                                                                                    entries{
                                                                                      name
                                                                                      type
                                                                                      child: object{
                                                                                        ... on Tree{
                                                                                          entries{
                                                                                            name
                                                                                            type
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`

/**
 * @description Github Graphql Query for commit content (files and directories)
 * @queryVariable expression: "refs/heads/master" OR commit hash
 */
export const CommitContent = `
query($repositoryOwner: String!, $repositoryName: String!, $expression: String!){
  repository(owner: $repositoryOwner, name: $repositoryName){
    commit: object(expression: $expression){
      ... on Commit{
        files: tree{
            entries{
                name
                type
                child: object{
                    ... on Blob{
                      text
                    }
                    ... on Tree{
                      entries{
                        name
                        type
                        child: object{
                          ... on Blob{
                            text
                          }
                          ... on Tree{
                            entries{
                              name
                              type
                              child: object{
                                ... on Blob{
                                  text
                                }
                                ... on Tree{
                                  entries{
                                    name
                                    type
                                    child: object{
                                      ... on Blob{
                                        text
                                      }
                                      ... on Tree{
                                        entries{
                                          name
                                          type
                                          child: object{
                                            ... on Blob{
                                              text
                                            }
                                            ... on Tree{
                                              entries{
                                                name
                                                type
                                                child: object{
                                                  ... on Blob{
                                                    text
                                                  }
                                                  ... on Tree{
                                                    entries{
                                                      name
                                                      type
                                                      child: object{
                                                        ... on Blob{
                                                          text
                                                        }
                                                        ... on Tree{
                                                          entries{
                                                            name
                                                            type
                                                            child: object{
                                                              ... on Blob{
                                                                text
                                                              }
                                                              ... on Tree{
                                                                entries{
                                                                  name
                                                                  type
                                                                  child: object{
                                                                    ... on Blob{
                                                                      text
                                                                    }
                                                                    ... on Tree{
                                                                      entries{
                                                                        name
                                                                        type
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
        }
        }
    }
    }
  }
}
`

/**
 * @description Github Graphql Query for commit directories only (content excluded)
 * @queryVariable expression: "refs/heads/master" OR commit hash
 */
export const CommitDirectories = `
  query($repositoryOwner: String!, $repositoryName: String!, $expression: String!){
    repository(owner: $repositoryOwner, name: $repositoryName){
      commit: object(expression: $expression){
        ... on Commit{
          files: tree{
              entries{
                  name
                  type
                  child: object{
                      ... on Tree{
                        entries{
                          name
                          type
                          child: object{
                            ... on Tree{
                              entries{
                                name
                                type
                                child: object{
                                  ... on Tree{
                                    entries{
                                      name
                                      type
                                      child: object{
                                        ... on Tree{
                                          entries{
                                            name
                                            type
                                            child: object{
                                              ... on Tree{
                                                entries{
                                                  name
                                                  type
                                                  child: object{
                                                    ... on Tree{
                                                      entries{
                                                        name
                                                        type
                                                        child: object{
                                                          ... on Tree{
                                                            entries{
                                                              name
                                                              type
                                                              child: object{
                                                                ... on Tree{
                                                                  entries{
                                                                    name
                                                                    type
                                                                    child: object{
                                                                      ... on Tree{
                                                                        entries{
                                                                          name
                                                                          type
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
          }
          }
      }
      }
    }
  }
`

/**
 * @description Github Graphql Query for branch details
 * @queryVariable qualifiedName: "refs/heads/master"
 */
export const Branch = `
  query($repositoryOwner: String!, $repositoryName: String!, $qualifiedName: String!){
    repository(owner: $repositoryOwner, name: $repositoryName){
      branch: ref(qualifiedName: $qualifiedName){
        id
        name
        prefix
      }
    }
  }
`

/**
 * @description Github Graphql Query for commit details
 * @queryVariable expression: "refs/heads/master" OR commit hash
 */
export const Commit = `
query($repositoryOwner: String!, $repositoryName: String!, $expression: String!){
  repository(owner: $repositoryOwner, name: $repositoryName){
    commit: object(expression: $expression){
      ... on Commit{
        authoredByCommitter
        authoredDate
        changedFiles
        commitUrl
        committedDate
        committedViaWeb
        deletions
        id
        message
        messageBody
        messageBodyHTML
        messageHeadline
        messageHeadlineHTML
        oid
        pushedDate
        resourcePath
        tarballUrl
        treeResourcePath
        treeUrl
        url
        viewerCanSubscribe
        viewerSubscription
        zipballUrl
      }
    }
  }
}
`

/**
 * @description Github Graphql Query for Viewer Followers
 * @queryVariable after: String! //Cursor , before: String! //Cursor
 */
export const ViewerFollowers = `
  query($after: String, $before: String, $first: Int, $last: Int){
    viewer{
      followers(first: $first, after: $after, before: $before, last: $last){
        edges{
          node{
            id
            email
            login
            url
            createdAt
            updatedAt
            databaseId
            location
            companyHTML
            company
            avatarUrl
            bio
            websiteUrl
            isHireable
            isDeveloperProgramMember
            anyPinnableItems
            isSiteAdmin
            isViewer
            viewerCanFollow
            viewerIsFollowing
            viewerCanCreateProjects
            isEmployee
            isBountyHunter
            isCampusExpert
            pinnedItemsRemaining
            projectsUrl
          }
          cursor
        }
        pageInfo{
          endCursor
          hasNextPage
          hasPreviousPage
          startCursor
        }
        totalCount
      }
    }
  }
`

/**
 * @description Github Graphql Query for Github User
 * @queryVariable
 **  login username
 * @fields
 **  User
 */
export const UserQuery = (login: string, fields: string) => `
{
  user (login: "${login}") {
    ${fields}
  }
}
`

/**
 * @description Github Graphql Query for All User Repositories
 * @queryVariable username: String! first: Int!
 */
export const Repositories = `
  query($username: String!, $affiliations: RepositoryAffiliation, $after: String, $before: String, $first: Int, $isFork: Boolean, $isLocked: Boolean, $last: Int, $orderBy: RepositoryOrder, $privacy: RepositoryPrivacy){
    user(login: $username){
      repositories(affiliations: [$affiliations], after: $after, before: $before, first: $first, isFork: $isFork, isLocked: $isLocked, last: $last, orderBy: $orderBy, privacy: $privacy){
        edges{
          cursor
          node{
            createdAt
            databaseId
            description
            descriptionHTML
            diskUsage
            forkCount
            hasIssuesEnabled
            hasProjectsEnabled
            hasWikiEnabled
            homepageUrl
            id
            isArchived
            isDisabled
            isFork
            isLocked
            isMirror
            isPrivate
            isTemplate
            lockReason
            mergeCommitAllowed
            mirrorUrl
            name
            nameWithOwner
            openGraphImageUrl
            projectsResourcePath
            projectsUrl
            pushedAt
            rebaseMergeAllowed
            resourcePath
            shortDescriptionHTML
            squashMergeAllowed
            sshUrl
            tempCloneToken
            updatedAt
            url
            usesCustomOpenGraphImage
            viewerCanAdminister
            viewerCanCreateProjects
            viewerCanAdminister
            viewerCanSubscribe
            viewerCanUpdateTopics
            viewerHasStarred
            viewerPermission
            viewerSubscription
          }
        }
        pageInfo{
          endCursor
          hasNextPage
          hasPreviousPage
          startCursor
        }
        totalCount
        totalDiskUsage
      }
    }
  }
`

/**
 * @description Github Graphql Query for CommitComments
 * @queryVariable username: String! first: Int!
 */
export const UserCommitComments = `
query($username: String!, $after: String, $before: String, $first: Int, $last: Int){
  user(login: $username){
    commitComments(after: $after, before: $before, first: $first, last: $last){
      edges{
        cursor
        node{
          author{
            avatarUrl
            login
            resourcePath
            url
          }
          authorAssociation
          body
          bodyHTML
          bodyText
          createdAt
          createdViaEmail
          databaseId
          editor{
            avatarUrl
            login
            resourcePath
            url
          }
          id
          includesCreatedEdit
          isMinimized
          lastEditedAt
          minimizedReason
          path
          position
          publishedAt
          resourcePath
          updatedAt
          url
          viewerCanDelete
          viewerCanMinimize
          viewerCanReact
          viewerCanUpdate
          viewerCannotUpdateReasons
        }
      }
      pageInfo{
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      totalCount
    }
  }
}
`

/**
 * @description Github Graphql Query for User Issues
 * @queryVariable username: String! first: Int!
 */
export const UserIssues = `
query($username: String!, $before: String, $after: String, $filterBy: IssueFilters, $first: Int, $last: Int, $orderBy: IssueOrder, $includeNotificationContexts: Boolean = true){
  user(login: $username){
    issues(after: $after, before: $before, filterBy: $filterBy, first: $first, last: $last, orderBy: $orderBy){
      edges{
        cursor
        node{
          activeLockReason
          author{
            avatarUrl
            login
            resourcePath
            url
          }
          body
          bodyHTML
          bodyText
          closed
          closedAt
          createdAt
          createdViaEmail
          databaseId
          editor{
            avatarUrl
            login
            resourcePath
            url
          }
          hovercard(includeNotificationContexts: $includeNotificationContexts){
            contexts{
              message
              octicon
            }
          }
          id
          includesCreatedEdit
          lastEditedAt
          locked
          milestone {
            id
          }
          number
          publishedAt
          reactionGroups {
            createdAt
          }
          resourcePath
          state
          title
          updatedAt
          url
          viewerCanReact
          viewerCanSubscribe
          viewerCanUpdate
          viewerCannotUpdateReasons
          viewerDidAuthor
          viewerSubscription
        }
      }
      pageInfo{
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      totalCount
    }
  }
}
`

/**
 * @description Github Graphql Relay
 * @fields
 ** CodeofConduct
 ** CodesofConduct
 ** Enterprise
 ** EnterpriseAdministratorInvitation 
 ** EnterpriseAdministratorInvitationByToken
 ** License
 ** Licenses
 ** MarketplaceCategories
 ** MarketplaceCategory
 ** MarketplaceListing
 ** MarketplaceListings
 ** Meta
 ** Node
 ** Nodes
 ** Organization
 ** RateLimit
 ** Relay
 ** Repository
 ** RepositoryOwner
 ** Resource
 ** Search
 ** SecurityAdvisories
 ** SecurityAdvisory
 ** SecurityVulnerabilities
 ** Sponsorables
 ** SponsorsListing
 ** Topic
 ** User
 ** Viewer
*/

export const Relay = (fields: string = "") => `
  {
    relay {
      ${fields}
    }
  }
`

/**
* @description Github Graphql Nodes 
* @fields
** onCodeOfConduct
** onEnterprise
** onEnterpriseUserAccount
** onOrganization
** onPackage
** onPackageVersion
** onPackageFile
** onRelease
** onUser
** onProject
** onProjectColumn
** onProjectCard
** onIssue
** onUserContentEdit
** onLabel
** onPullRequest
** onReaction
** onRepository
** onLicense
** onBranchProtectionRule
** onRef
** onPushAllowance
** onApp
** onTeam
** onUserStatus
** onTeamDiscussion
** onTeamDiscussionComment
** onOrganizationInvitation
** onReviewDismissalAllowance
** onCommitComment
** onCommit
** onCheckSuite
** onCheckRun
** onPush
** onDeployment
** onDeploymentStatus
** onStatus
** onStatusContext
** onStatusCheckRollup
** onTree
** onDeployKey
** onLanguage
** onMilestone
** onPinnedIssue
** onRepositoryTopic
** onTopic
** onRepositoryVulnerabilityAlert
** onSecurityAdvisory
** onCWE
** onIssueComment
** onPullRequestCommit
** onPullRequestReview
** onPullRequestReviewComment
** onReviewRequest
** onMannequin
** onPullRequestReviewThread
** onAssignedEvent
** onBot
** onBaseRefDeletedEvent
** onBaseRefForcePushedEvent
** onClosedEvent
** onCommitCommentThread
** onCrossReferencedEvent
** onDemilestonedEvent
** onDeployedEvent
** onDeploymentEnvironmentChangedEvent
** onHeadRefDeletedEvent
** onHeadRefForcePushedEvent
** onHeadRefRestoredEvent
** onLabeledEvent
** onLockedEvent
** onMergedEvent
** onMilestonedEvent
** onReferencedEvent
** onRenamedTitleEvent
** onReopenedEvent
** onReviewDismissedEvent
** onReviewRequestRemovedEvent
** onReviewRequestedEvent
** onSubscribedEvent
** onUnassignedEvent
** onUnlabeledEvent
** onUnlockedEvent
** onUnsubscribedEvent
** onUserBlockedEvent
** onAddedToProjectEvent
** onAutoMergeDisabledEvent
** onAutoMergeEnabledEvent
** onAutoRebaseEnabledEvent
** onAutoSquashEnabledEvent
** onAutomaticBaseChangeFailedEvent
** onAutomaticBaseChangeSucceededEvent
** onBaseRefChangedEvent
** onCommentDeletedEvent
** onConnectedEvent
** onConvertToDraftEvent
** onConvertedNoteToIssueEvent
** onDisconnectedEvent
** onMarkedAsDuplicateEvent
** onMentionedEvent
** onMovedColumnsInProjectEvent
** onPinnedEvent
** onPullRequestCommitCommentThread
** onReadyForReviewEvent
** onRemovedFromProjectEvent
** onTransferredEvent
** onUnmarkedAsDuplicateEvent
** onUnpinnedEvent
** onGist
** onGistComment
** onSponsorsListing
** onSponsorsTier
** onSponsorship
** onPublicKey
** onSavedReply
** onReleaseAsset
** onMembersCanDeleteReposClearAuditEntry
** onMembersCanDeleteReposDisableAuditEntry
** onMembersCanDeleteReposEnableAuditEntry
** onOauthApplicationCreateAuditEntry
** onOrgAddBillingManagerAuditEntry
** onOrgAddMemberAuditEntry
** onOrgBlockUserAuditEntry
** onOrgConfigDisableCollaboratorsOnlyAuditEntry
** onOrgConfigEnableCollaboratorsOnlyAuditEntry
** onOrgCreateAuditEntry
** onOrgDisableOauthAppRestrictionsAuditEntry
** onOrgDisableSamlAuditEntry
** onOrgDisableTwoFactorRequirementAuditEntry
** onOrgEnableOauthAppRestrictionsAuditEntry
** onOrgEnableSamlAuditEntry
** onOrgEnableTwoFactorRequirementAuditEntry
** onOrgInviteMemberAuditEntry
** onOrgInviteToBusinessAuditEntry
** onOrgOauthAppAccessApprovedAuditEntry
** onOrgOauthAppAccessDeniedAuditEntry
** onOrgOauthAppAccessRequestedAuditEntry
** onOrgRemoveBillingManagerAuditEntry
** onOrgRemoveMemberAuditEntry
** onOrgRemoveOutsideCollaboratorAuditEntry
** onOrgRestoreMemberAuditEntry
** onOrgUnblockUserAuditEntry
** onOrgUpdateDefaultRepositoryPermissionAuditEntry
** onOrgUpdateMemberAuditEntry
** onOrgUpdateMemberRepositoryCreationPermissionAuditEntry
** onOrgUpdateMemberRepositoryInvitationPermissionAuditEntry
** onPrivateRepositoryForkingDisableAuditEntry
** onPrivateRepositoryForkingEnableAuditEntry
** onRepoAccessAuditEntry
** onRepoAddMemberAuditEntry
** onRepoAddTopicAuditEntry
** onRepoArchivedAuditEntry
** onRepoChangeMergeSettingAuditEntry
** onRepoConfigDisableAnonymousGitAccessAuditEntry
** onRepoConfigDisableCollaboratorsOnlyAuditEntry
** onRepoConfigDisableContributorsOnlyAuditEntry
** onRepoConfigDisableSockpuppetDisallowedAuditEntry
** onRepoConfigEnableAnonymousGitAccessAuditEntry
** onRepoConfigEnableCollaboratorsOnlyAuditEntry
** onRepoConfigEnableContributorsOnlyAuditEntry
** onRepoConfigEnableSockpuppetDisallowedAuditEntry
** onRepoConfigLockAnonymousGitAccessAuditEntry
** onRepoConfigUnlockAnonymousGitAccessAuditEntry
** onRepoCreateAuditEntry
** onRepoDestroyAuditEntry
** onRepoRemoveMemberAuditEntry
** onRepoRemoveTopicAuditEntry
** onRepositoryVisibilityChangeDisableAuditEntry
** onRepositoryVisibilityChangeEnableAuditEntry
** onTeamAddMemberAuditEntry
** onTeamAddRepositoryAuditEntry
** onTeamChangeParentTeamAuditEntry
** onTeamRemoveMemberAuditEntry
** onTeamRemoveRepositoryAuditEntry
** onVerifiableDomain
** onIpAllowListEntry
** onOrganizationIdentityProvider
** onExternalIdentity
** onEnterpriseServerInstallation
** onEnterpriseServerUserAccount
** onEnterpriseServerUserAccountEmail
** onEnterpriseServerUserAccountsUpload
** onEnterpriseRepositoryInfo
** onEnterpriseAdministratorInvitation
** onRepositoryInvitation
** onEnterpriseIdentityProvider
** onMarketplaceCategory
** onMarketplaceListing
** onBlob
** onPackageTag
** onTag 
*/

export const Nodes = (ids: string, fields: string) => `
  {
    nodes (ids: "${ids}") {
      id
      ${fields}
    }
  }
`

/**
* @description Github Graphql RateLimit
* @fields
 ** cost
 ** limit
 ** nodeCount
 ** remaining
 ** resetAt 
 ** used
*/

export const RateLimit = (fields: string, dryRun?: boolean,) => `
  {
    rateLimit ${dryRun ? `(dryRun: ${dryRun})` : ""} {
      ${fields}
    }
  }
`

/**
* @description Github Graphql Node
* @fields 
** onCodeOfConduct
** onEnterprise
** onEnterpriseUserAccount
** onOrganization
** onPackage
** onPackageVersion
** onPackageFile
** onRelease
** onUser
** onProject
** onProjectColumn
** onProjectCard
** onIssue
** onUserContentEdit
** onLabel
** onPullRequest
** onReaction
** onRepository
** onLicense
** onBranchProtectionRule
** onRef
** onPushAllowance
** onApp
** onTeam
** onUserStatus
** onTeamDiscussion
** onTeamDiscussionComment
** onOrganizationInvitation
** onReviewDismissalAllowance
** onCommitComment
** onCommit
** onCheckSuite
** onCheckRun
** onPush
** onDeployment
** onDeploymentStatus
** onStatus
** onStatusContext
** onStatusCheckRollup
** onTree
** onDeployKey
** onLanguage
** onMilestone
** onPinnedIssue
** onRepositoryTopic
** onTopic
** onRepositoryVulnerabilityAlert
** onSecurityAdvisory
** onCWE
** onIssueComment
** onPullRequestCommit
** onPullRequestReview
** onPullRequestReviewComment
** onReviewRequest
** onMannequin
** onPullRequestReviewThread
** onAssignedEvent
** onBot
** onBaseRefDeletedEvent
** onBaseRefForcePushedEvent
** onClosedEvent
** onCommitCommentThread
** onCrossReferencedEvent
** onDemilestonedEvent
** onDeployedEvent
** onDeploymentEnvironmentChangedEvent
** onHeadRefDeletedEvent
** onHeadRefForcePushedEvent
** onHeadRefRestoredEvent
** onLabeledEvent
** onLockedEvent
** onMergedEvent
** onMilestonedEvent
** onReferencedEvent
** onRenamedTitleEvent
** onReopenedEvent
** onReviewDismissedEvent
** onReviewRequestRemovedEvent
** onReviewRequestedEvent
** onSubscribedEvent
** onUnassignedEvent
** onUnlabeledEvent
** onUnlockedEvent
** onUnsubscribedEvent
** onUserBlockedEvent
** onAddedToProjectEvent
** onAutoMergeDisabledEvent
** onAutoMergeEnabledEvent
** onAutoRebaseEnabledEvent
** onAutoSquashEnabledEvent
** onAutomaticBaseChangeFailedEvent
** onAutomaticBaseChangeSucceededEvent
** onBaseRefChangedEvent
** onCommentDeletedEvent
** onConnectedEvent
** onConvertToDraftEvent
** onConvertedNoteToIssueEvent
** onDisconnectedEvent
** onMarkedAsDuplicateEvent
** onMentionedEvent
** onMovedColumnsInProjectEvent
** onPinnedEvent
** onPullRequestCommitCommentThread
** onReadyForReviewEvent
** onRemovedFromProjectEvent
** onTransferredEvent
** onUnmarkedAsDuplicateEvent
** onUnpinnedEvent
** onGist
** onGistComment
** onSponsorsListing
** onSponsorsTier
** onSponsorship
** onPublicKey
** onSavedReply
** onReleaseAsset
** onMembersCanDeleteReposClearAuditEntry
** onMembersCanDeleteReposDisableAuditEntry
** onMembersCanDeleteReposEnableAuditEntry
** onOauthApplicationCreateAuditEntry
** onOrgAddBillingManagerAuditEntry
** onOrgAddMemberAuditEntry
** onOrgBlockUserAuditEntry
** onOrgConfigDisableCollaboratorsOnlyAuditEntry
** onOrgConfigEnableCollaboratorsOnlyAuditEntry
** onOrgCreateAuditEntry
** onOrgDisableOauthAppRestrictionsAuditEntry
** onOrgDisableSamlAuditEntry
** onOrgDisableTwoFactorRequirementAuditEntry
** onOrgEnableOauthAppRestrictionsAuditEntry
** onOrgEnableSamlAuditEntry
** onOrgEnableTwoFactorRequirementAuditEntry
** onOrgInviteMemberAuditEntry
** onOrgInviteToBusinessAuditEntry
** onOrgOauthAppAccessApprovedAuditEntry
** onOrgOauthAppAccessDeniedAuditEntry
** onOrgOauthAppAccessRequestedAuditEntry
** onOrgRemoveBillingManagerAuditEntry
** onOrgRemoveMemberAuditEntry
** onOrgRemoveOutsideCollaboratorAuditEntry
** onOrgRestoreMemberAuditEntry
** onOrgUnblockUserAuditEntry
** onOrgUpdateDefaultRepositoryPermissionAuditEntry
** onOrgUpdateMemberAuditEntry
** onOrgUpdateMemberRepositoryCreationPermissionAuditEntry
** onOrgUpdateMemberRepositoryInvitationPermissionAuditEntry
** onPrivateRepositoryForkingDisableAuditEntry
** onPrivateRepositoryForkingEnableAuditEntry
** onRepoAccessAuditEntry
** onRepoAddMemberAuditEntry
** onRepoAddTopicAuditEntry
** onRepoArchivedAuditEntry
** onRepoChangeMergeSettingAuditEntry
** onRepoConfigDisableAnonymousGitAccessAuditEntry
** onRepoConfigDisableCollaboratorsOnlyAuditEntry
** onRepoConfigDisableContributorsOnlyAuditEntry
** onRepoConfigDisableSockpuppetDisallowedAuditEntry
** onRepoConfigEnableAnonymousGitAccessAuditEntry
** onRepoConfigEnableCollaboratorsOnlyAuditEntry
** onRepoConfigEnableContributorsOnlyAuditEntry
** onRepoConfigEnableSockpuppetDisallowedAuditEntry
** onRepoConfigLockAnonymousGitAccessAuditEntry
** onRepoConfigUnlockAnonymousGitAccessAuditEntry
** onRepoCreateAuditEntry
** onRepoDestroyAuditEntry
** onRepoRemoveMemberAuditEntry
** onRepoRemoveTopicAuditEntry
** onRepositoryVisibilityChangeDisableAuditEntry
** onRepositoryVisibilityChangeEnableAuditEntry
** onTeamAddMemberAuditEntry
** onTeamAddRepositoryAuditEntry
** onTeamChangeParentTeamAuditEntry
** onTeamRemoveMemberAuditEntry
** onTeamRemoveRepositoryAuditEntry
** onVerifiableDomain
** onIpAllowListEntry
** onOrganizationIdentityProvider
** onExternalIdentity
** onEnterpriseServerInstallation
** onEnterpriseServerUserAccount
** onEnterpriseServerUserAccountEmail
** onEnterpriseServerUserAccountsUpload
** onEnterpriseRepositoryInfo
** onEnterpriseAdministratorInvitation
** onRepositoryInvitation
** onEnterpriseIdentityProvider
** onMarketplaceCategory
** onMarketplaceListing
** onBlob
** onPackageTag
** onTag 
*/

export const Node = (id: string, fields: string) => `
  {
    node (id: "${id}") {
      id
      ${fields}
    }
  }
`

/**
* @description Github Graphql Query Meta 
* @fields
** gitHubServicesSha
** gitIpAddresses
** hookIpAddresses
** importerIpAddresses
** isPasswordAuthenticationVerifiable
** pagesIpAddresses
*/
export const Meta = (fields: string) => `
  {
    meta {
      ${fields}
    }
  }
 `
/**
* @description Github Graphql Query for MarketplaceListings
 * @fields
 ** MarketplaceListings
 */

export const MarketplaceListingsQuery = (fields: string) => `
  {
      ${fields}
  }
`

/**
* @description Github Graphql Query for MarketplaceListing
* @fields
** MarketplaceListing
*/

export const MarketplaceListingQuery = (slug: string, fields: string) => `
 {
   marketplaceListing(slug: "${slug}") {
     ${fields}
   }
 }
`
/**
* @description Github Graphql Query for MarketplaceCategory
* @queryVariable
** slug string
** useTopicAliases boolean
* @fields
** description
** howItWorks
** id
** name
** primaryListingCount
** resourcePath
** secondaryListingCount
** slug
** url
*/

export const MarketplaceCategory = (slug: string, fields: string, useTopicAliases?: boolean) => `
 {
   marketplaceCategory(slug: "${slug}", ${useTopicAliases ? `useTopicAliases: ${useTopicAliases}` : ""}) {
     ${fields}
   }
 }
`

/**
* @description Github Graphql Query for MarketplaceCategories
* @queryVariable
** excludeEmpty boolean
** excludeSubcategories boolean
** includeCategories string
* @fields
** description
** howItWorks
** id
** name
** primaryListingCount
** resourcePath
** secondaryListingCount
** slug
** url
*/

export const MarketplaceCategoriesQuery = (params: queryVariables.MarketplaceCategories) => `
  {
    marketplaceCategories ${params.excludeEmpty || params.excludeSubcategories || params.includeCategories ? `(${params.excludeEmpty ? `excludeEmpty: ${params.excludeEmpty},` : ""} ${params.excludeSubcategories ? `excludeSubcategories: ${params.excludeSubcategories},` : ""}
    ${params.includeCategories ? `includeCategories: "${params.includeCategories}",` : ""})` : ""} {
      ${params.fields}
    }
  }
`
/**
 * @description Github Graphql Query for LicensesQuery 
 * @fields 
 ** Licenses
*/

export const LicensesQuery = (fields: string) => `
  {
    ${fields}
  }
`
/**
 * @description Github Graphql Query for LicenseQuery 
 * @fields 
 * License
*/

export const LicenseQuery = (fields: string) => `
  {
    ${fields}
  }
`
/**
* @description Github Graphql Query for CodeOfConduct
 * @fields
 ** CodeOfConduct
 */

export const CodeOfConductQuery = (fields: string) => `
  {
    ${fields}
  }
`

/**
 * @description Github Graphql Query for EnterpriseAdministratorInvitation
 * @fields 
 ** EnterpriseAdministratorInvitation 
 */

export const EnterpriseAdministratorInvitationQuery = (fields: string) => `
  {
    ${fields}
  }
 `

/**
* @description Github Graphql Query for EnterpriseAdministratorInvitationByToken
* @fields 
** EnterpriseAdministratorInvitationByToken 
*/

export const EnterpriseAdministratorInvitationByTokenQuery = (fields: string) => `
  {
    ${fields}
  }
 `

/**
* @description Github Graphql Query EnterpriseQuery
* @fields
** Enterprise 
*/

export const EnterpriseQuery = (fields: string) => `
    {
      ${fields}
    }
 `

/**
* @description Github Graphql Query for CodesOfConductQuery
* @fields
* CodesOfConduct
*/

export const CodesOfConductQuery = (fields: string) => `
 {
   ${fields}
 }
`
