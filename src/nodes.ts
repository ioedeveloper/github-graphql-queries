/**
* @description Github Graphql onUser
* @defaultVariables id email
* @fields
** User
*/

 export const onUser = (fields: string) => `
	... on User {
		id
		email
		${fields}
 	}
`

/**
* @description Github Graphql onEnterpriseUserAccount
* @fields
** EnterpriseUserAccount
*/

export const onEnterpriseUserAccount = (fields: string = '') => `
    ... on EnterpriseUserAccount {
        ${fields}
    }
`

/**
* @description Github Graphql onMannequin
* @defaultVariables id email
* @fields
** avatarUrl
** createdAt
** databaseId
** login
** resourcePath
** updatedAt
** url
*/

export const onMannequin = (fields?: string) => `
	... on Mannequin {
		id
		email
		${fields}        
	}
`

/**
* @description Github Graphql onBot
* @defaultVariables id
* @fields
** avatarUrl
** createdAt
** databaseId
** login
** resourcePath
** updatedAt
** url
*/

export const onBot = (fields?: string) => `
	... on Bot {
		id
		email
		${fields}        
	}
`

/**
* @description Github Graphql onPullRequest  
* @fields
** PullRequest
*/

export const onPullRequest = (fields: string = "") => `
    ... on PullRequest {
        ${fields}
    }
`

/**
* @description Github Graphql onPullRequestReviewThread  
* @fields
** PullRequestReviewThread
*/

export const onPullRequestReviewThread = (fields: string = "") => `
    ... on PullRequestReviewThread {
        ${fields}
    }
`

/**
* @description Github Graphql onApp
* @defaultVariables id
* @fields
** avatarUrl
** App
*/

export const onApp = (fields: string = "") => `
	... on App {
		${fields}        
	}
`

/**
* @description Github Graphql onIssue  
* @fields
** Issue
*/

export const onIssue = (fields: string = "") => `
    ... on Issue {
        ${fields}
    }
`
/**
* @description Github Graphql onMembersCanDeleteReposDisableAuditEntry
* @defaultVariables id
* @fields
** id
** action
** actor { onBot onOrganization onUser }
** actorIp
** actorLocation { city country countryCode region regionCode }
** actorLogin
** actorResourcePath
** actorUrl
** createdAt
** enterpriseResourcePath
** enterpriseSlug
** enterpriseUrl
** Organization
** operationType
** organizationName
** organizationResourcePath
** organizationUrl
** user { User }
** userLogin
** userResourcePath
** userUrl
*/

export const onMembersCanDeleteReposDisableAuditEntry = (fields?: string) => `
    ... on MembersCanDeleteReposDisableAuditEntry {
        id
        ${fields}
    }
`

/**
 * @description Github Graphql onGenericHovercardContext 
* @fields
** message
** octicon
*/

export const onGenericHovercardContext = (fields: string) => `
    ... on GenericHovercardContext {
        __typename
        ${fields}        
    }
`

/**
* @description Github Graphql onOrganizationTeamsHovercardContext 
* @fields
** message
** octicon
** RelevantTeams
** teamsResourcePath
** teamsUrl
** totalTeamCount
*/

export const onOrganizationTeamsHovercardContext = (fields: string) => `
    ... on OrganizationTeamsHovercardContext {
        __typename
        ${fields}        
    }
`

/**
* @description Github Graphql onOrganizationsHovercardContext 
* @fields
** message
** octicon
** RelevantOrganizations
** totalOrganizationCount
*/

export const onOrganizationsHovercardContext = (fields: string) => `
    ... on OrganizationsHovercardContext {
        __typename
        ${fields}        
    }
`

/**
* @description Github Graphql onReviewStatusHovercardContext 
* @fields
** reviewDecision
** message
** octicon
*/

export const onReviewStatusHovercardContext = (fields: string) => `
    ... on ReviewStatusHovercardContext {
        ${fields}        
    }
`

/**
* @description Github Graphql onViewerHovercardContext 
* @fields
** message
** octicon
** viewer { User }
*/

export const onViewerHovercardContext = (fields: string) => `
    ... on ViewerHovercardContext {
        __typename
        ${fields}        
    }
`

/**
* @description Github Graphql onUnknownSignature 
* @fields
** email
** isValid
** payload
** signature
** signer { User }
** state
** wasSignedByGitHub
*/

export const onUnknownSignature = (fields:string = "" ) => `
    ... on UnknownSignature {
        __typename
        ${fields}
    }
`

/**
* @description Github Graphql onSmimeSignature 
* @fields
** __typename
** email
** isValid
** payload
** signature
** signer { User }
** state
** wasSignedByGitHub
*/

export const onSmimeSignature = (fields:string = "" ) => `
    ... on SmimeSignature {
        __typename
        ${fields}
    }
`

/**
* @description Github Graphql onGpgSignature
* @fields
** keyId
** email
** isValid
** payload
** signature
** signer { User }
** state
** wasSignedByGitHub
*/

export const onGpgSignature = (fields:string = "" ) => `
    ... on GpgSignature {
        ${fields}
    }
`

/**
* @description Github Graphql onAddedToProjectEvent
* @fields
** actor { Owner }
** createdAt
** databaseId
** id
*/

export const onAddedToProjectEvent = (fields: string = "") => `
    ... on AddedToProjectEvent {
        createdAt
        id
        ${fields}
    }
`


/**
* @description Github Graphql onAutoMergeDisabledEvent
* @fields 
** actor { Owner }
** createdAt
** disabler { User }
** id
** PullRequest
** reason
** reasonCode
*/

export const onAutoMergeDisabledEvent = (fields: string = "") => `
    ... on AutoMergeDisabledEvent {
        createdAt
        id
        ${fields}
    }
`

/**
* @description Github Graphql onAutoMergeEnabledEvent
* @fields    
** actor { Owner }
** createdAt
** disabler { User }
** id
** PullRequest
** reason
** reasonCode
*/

export const onCreatedIssueContribution = (fields: string) => `
   ... on CreatedIssueContribution {
      __typename
      ${fields}
   }
`

/**
* @description Github Graphql onRestrictedContribution 
* @fields
** actor { Owner }
** createdAt
** enabler { User }
** id
** PullRequest
*/

export const onAutoRebaseEnabledEvent = (fields: string = "") => `
    ... on AutoRebaseEnabledEvent {
        createdAt
        id
        ${fields}
    }
`

/**
* @description Github Graphql onAutoSquashEnabledEvent
* @fields
** actor { Owner }
** createdAt
** enabler { User }
** id
** PullRequest
*/

export const onAutoSquashEnabledEvent = (fields: string = "") => `
    ... on AutoSquashEnabledEvent {
        createdAt
        id
        ${fields}
    }
`

/**
* @description Github Graphql onAutomaticBaseChangeFailedEvent
* @fields
** actor{ Owner }
** createdAt
** id
** PullRequest
** newBase
** oldBase
*/


* actorIp

* actorLocation {

*   city
            
*   country
            
*   countryCode
            
*   region

*   regionCode
          
* }

/**
* @description Github Graphql onBaseRefDeletedEvent
* @fields
** actor { Owner }
** baseRefName
** createdAt
** ClosedEvent
** id
** PullRequest
*/

* userLogin
    
* userResourcePath

* userUrl
*/

export const onOrgConfigDisableCollaboratorsOnlyAuditEntry = (fields?: string) => `
    ... on OrgConfigDisableCollaboratorsOnlyAuditEntry {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onBaseRefChangedEvent
* @fields
** actor{ Owner }
** createdAt
** currentRefName
** databaseId
** id
** previousRefName
** PullRequest
*/

export const onBaseRefChangedEvent = (fields: string = "") => `
    ... on BaseRefChangedEvent {
        ${fields}
    }
`
/**
* @description Github Graphql onOrgConfigEnableCollaboratorsOnlyAuditEntry
* @defaultVariables id
* @queryVariables id
* action
* actor {
    onBot
    onOrganization
    onUser
}

* actorIp

* actorLocation {

*   city
            
*   country
            
*   countryCode
            
*   region

*   regionCode
          
* }

* actorLogin

* actorResourcePath
          
* actorUrl
          
* createdAt

* Organization
    
* operationType
    
* organizationName
    
* organizationResourcePath
    
* organizationUrl

* user {
    User
}

* userLogin
    
* userResourcePath

* userUrl
*/

export const OrgConfigEnableCollaboratorsOnlyAuditEntry = (fields?: string) => `
    ... on OrgConfigEnableCollaboratorsOnlyAuditEntry {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onOrgCreateAuditEntry
* @defaultVariables id
* action
* actor {
    onBot
    onOrganization
    onUser
}

* actorIp

* actorLocation {

*   city
            
*   country
            
*   countryCode
            
*   region

*   regionCode
          
* }

* actorLogin

* actorResourcePath
          
* actorUrl
          
* createdAt

* billingPlan

* Organization
    
* operationType
    
* organizationName
    
* organizationResourcePath
    
* organizationUrl

* user {
    User
}

* userLogin
    
* userResourcePath

* userUrl
*/

export const onOrgCreateAuditEntry = (fields?: string) => `
    ... on OrgCreateAuditEntry {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onOrgDisableOauthAppRestrictionsAuditEntry
* @defaultVariables id
* action
* actor {
    onBot
    onOrganization
    onUser
}

* actorIp

* actorLocation {

*   city
            
*   country
            
*   countryCode
            
*   region

*   regionCode
          
* }

* actorLogin

* actorResourcePath
          
* actorUrl
          
* createdAt

* Organization
    
* operationType
    
* organizationName
    
* organizationResourcePath
    
* organizationUrl

* user {
    User
}

* userLogin
    
* userResourcePath

* userUrl
*/

export const onOrgDisableOauthAppRestrictionsAuditEntry = (fields?: string) => `
    ... on OrgDisableOauthAppRestrictionsAuditEntry {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onOrgDisableSamlAuditEntry
* @defaultVariables id
* action
* actor {
    onBot
    onOrganization
    onUser
}

* actorIp

* actorLocation {

*   city
            
*   country
            
*   countryCode
            
*   region

*   regionCode
          
* }

/**
* @description Github Graphql onAutomaticBaseChangeSucceededEvent
* @fields   
** actor { Owner }
** createdAt
** id
** PullRequest
** newBase
** oldBase
*/

* userLogin
    
* userResourcePath

* userUrl
*/

export const onOrgDisableSamlAuditEntry = (fields?: string) => `
    ... on OrgDisableSamlAuditEntry {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onBaseRefForcePushedEvent
* @fields
** id
** afterCommit
** beforeCommit
** createdAt
** PullRequest
** Ref
*/

* actorIp

* actorLocation {

*   city
            
*   country
            
*   countryCode
            
*   region

*   regionCode
          
* }

* actorLogin

* actorResourcePath
          
* actorUrl
          
* createdAt

* digestMethodUrl
          
* issuerUrl
          
* singleSignOnUrl

* Organization
    
* operationType
    
* organizationName
    
* organizationResourcePath
    
* organizationUrl

* user {
    User
}

* userLogin
    
* userResourcePath

* userUrl
*/

export const onOrgDisableTwoFactorRequirementAuditEntry = (fields?: string) => `
    ... on OrgDisableTwoFactorRequirementAuditEntry {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onOrgDisableTwoFactorRequirementAuditEntry
* @defaultVariables id
* action
* actor {
    onBot
    onOrganization
    onUser
}

* actorIp

/**
* @description Github Graphql onCommitCommentThread
* @fields
** Comments
** Commit
** id
** path
** position
** Repository
*/

*   city
            
*   country
            
*   countryCode
            
*   region

*   regionCode
          
* }

* actorLogin

* actorResourcePath
          
* actorUrl
          
* createdAt

* digestMethodUrl
          
* issuerUrl
          
* singleSignOnUrl

* Organization
    
* operationType
    
* organizationName
    
* organizationResourcePath
    
* organizationUrl

* user {
    User
}

* userLogin
    
* userResourcePath

* userUrl
*/

export const onOrgEnableOauthAppRestrictionsAuditEntry = (fields?: string) => `
    ... on OrgEnableOauthAppRestrictionsAuditEntry {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onOrgEnableSamlAuditEntry
* @defaultVariables id
* action
* actor {
    onBot
    onOrganization
    onUser
}

* actorIp

* actorLocation {

*   city
            
*   country
            
*   countryCode
            
*   region

*   regionCode
          
* }

* actorLogin

* actorResourcePath
          
* actorUrl
          
* createdAt

* digestMethodUrl
          
* issuerUrl
          
* singleSignOnUrl

* Organization
    
* operationType
    
* organizationName
    
* organizationResourcePath
    
* organizationUrl

* signatureMethodUrl
          
* singleSignOnUrl

* user {
    User
}

/**
* @description Github Graphql onDeployedEvent
* @fields
** id
** actor { Owner }
** createdAt
** databaseId
** deployment { Deployment }
** PullRequest
** ref { Ref }
*/

export const onOrgEnableSamlAuditEntry = (fields?: string) => `
    ... on OrgEnableSamlAuditEntry {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onOrgEnableTwoFactorRequirementAuditEntry
* @defaultVariables id
* action

* actor {
    onBot
    onOrganization
    onUser
}

* actorIp

* actorLocation {

*   city
            
*   country
            
*   countryCode
            
*   region

*   regionCode
          
* }
** PullRequest
*/

export const onOrgEnableTwoFactorRequirementAuditEntry = (fields?: string) => `
    ... on OrgEnableTwoFactorRequirementAuditEntry {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onOrgInviteMemberAuditEntry
* @defaultVariables id
* action

* actor {
    onBot
    onOrganization
    onUser
}

/**
* @description Github Graphql onHeadRefDeletedEvent
* @fields
** id
** actor { Owner }
** createdAt
** headRefName
** headRef Ref }
** PullRequest
*/

* actorLocation {

/**
* @description Github Graphql onHeadRefForcePushedEvent 
* @fields
** actor { Owner }
** afterCommit
** beforeCommit
** id
** PullRequest
** ref { Ref }
*/

*   regionCode
          
* }

/**
* @description Github Graphql onHeadRefRestoredEvent
* actor { Owner }
** createAt
** id
** PullRequest
*/

* actorResourcePath
          
* actorUrl
          
* createdAt

* email

* Organization
    
* operationType
    
* organizationName
    
* organizationResourcePath
    
* organizationUrl

* user {
    User
}

* userLogin
    
* userResourcePath

* userUrl
*/

export const onOrgInviteMemberAuditEntry = (fields?: string) => `
    ... on OrgInviteMemberAuditEntry {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onMergedEvent
* @fields
** actor { Owner }
** Commit
** createdAt
** id
** mergeRef { Ref }
** mergeName
** PullRequest
** resourcePath
** url
*/

* actorIp

* actorLocation {

*   city
            
*   country
            
*   countryCode
            
*   region

/**
* @description Github Graphql onReferencedEvent
* @fields
** actor { Owner }
** Commit
** commitRepository
** createdAt
** id
** isCrossRepository
** isDirectReference
** subject { onIssue onPullRequest }
*/

* actorLogin

* actorResourcePath
          
* actorUrl
          
* createdAt

* enterpriseResourcePath
          
* enterpriseSlug
          
* enterpriseUrl

* Organization
    
* operationType
    
* organizationName
    
* organizationResourcePath
    
* organizationUrl

* user {
    User
}

* userLogin
    
* userResourcePath

export const onRenamedTitleEvent = (fields: string = "") => `
    ... on RenamedTitleEvent {
        id
        currentTitle
        ${fields}
    }
`
/**
* @description Github Graphql onReopenedEvent
* @fields
** actor { Owner }
** id
** createdAt
** Closable
*/

export const onOrgInviteToBusinessAuditEntry = (fields?: string) => `
    ... on OrgInviteToBusinessAuditEntry {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onOrgOauthAppAccessApprovedAuditEntry
* @defaultVariables id
* action

* actor {
    onBot
    onOrganization
    onUser
}

/**
* @description Github Graphql onReviewDismissedEvent
* @fields
** actor { Owner }
** createdAt
** databaseId
** dismissalMessage
** dismissalMessageHTML
** id
** previousReviewState
** PullRequest
** pullRequestCommit {
	** Commit
	** id
	** PullRequest
	** resourcePath
	** url
* }
** resourcePath
** review { Review }
** url
*/

* actorLocation {

/**
* @description Github Graphql onReviewRequestRemovedEvent
* @fields
** actor { Owner }
** createdAt
** id
** PullRequest
** requestedReviewer { onMannequin onTeam onUser }
*/

*   regionCode
          
* }

/**
* @description Github Graphql onReviewRequestedEvent  
* @fields
**  actor { Owner }
** createdAt
** id
** PullRequest
** requestedReviewer { onMannequin onTeam onUser }
*/

* userLogin
    
* userResourcePath

* userUrl
*/

export const onOrgOauthAppAccessApprovedAuditEntry = (fields?: string) => `
    ... on OrgOauthAppAccessApprovedAuditEntry {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onOrgOauthAppAccessDeniedAuditEntry
* @defaultVariables id
* action

* actor {
    onBot
    onOrganization
    onUser
}

* actorIp

* actorLocation {

*   city
            
*   country
            
*   countryCode
            
*   region

*   regionCode
          
* }

* actorLogin

* actorResourcePath
          
* actorUrl
          
* createdAt

* oauthApplicationName
          
* oauthApplicationResourcePath
          
* oauthApplicationUrl

* Organization
    
* operationType
    
* organizationName
    
* organizationResourcePath
    
* organizationUrl

* user {
    User
}

* userLogin
    
* userResourcePath

* userUrl
*/

export const onOrgOauthAppAccessDeniedAuditEntry = (fields?: string) => `
    ... on OrgOauthAppAccessDeniedAuditEntry {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onOrgOauthAppAccessRequestedAuditEntry
* @defaultVariables id
* action

* actor {
    onBot
    onOrganization
    onUser
}

* actorIp

* actorLocation {

*   city
            
*   country
            
*   countryCode
            
*   region

*   regionCode
          
* }

* actorLogin

* actorResourcePath
          
* actorUrl
          
* createdAt

* oauthApplicationName
          
* oauthApplicationResourcePath
          
* oauthApplicationUrl

* Organization
    
* operationType
    
* organizationName
    
* organizationResourcePath
    
* organizationUrl

* user {
    User
}

* userLogin
    
* userResourcePath

* userUrl
*/

export const onOrgOauthAppAccessRequestedAuditEntry = (fields?: string) => `
    ... on OrgOauthAppAccessRequestedAuditEntry {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onOrgRemoveBillingManagerAuditEntry
* @defaultVariables id
* @queryVariables id
* action

* actor {
    onBot
    onOrganization
    onUser
}

* actorIp

* actorLocation {

*   city
            
*   country
            
*   countryCode
            
*   region

*   regionCode
          
* }

* actorLogin

* actorResourcePath
          
* actorUrl
          
* createdAt

* Organization
    
* operationType
    
* organizationName
    
* organizationResourcePath
    
* organizationUrl

* user {
    User
}

* userLogin
    
* userResourcePath

* userUrl
*/

export const onOrgRemoveBillingManagerAuditEntry = (fields?: string) => `
    ... on OrgRemoveBillingManagerAuditEntry {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onOrgRemoveMemberAuditEntry
* @defaultVariables id
* @queryVariables id
* action

* actor {
    onBot
    onOrganization
    onUser
}

* actorIp

* actorLocation {

*   city
            
*   country
            
*   countryCode
            
*   region

*   regionCode
          
* }

* actorLogin

* actorResourcePath
          
* actorUrl
          
* createdAt

* membershipTypes

* Organization
    
* operationType
    
* organizationName
    
* organizationResourcePath
    
* organizationUrl

* reason

* user {
    User
}

* userLogin
    
* userResourcePath

* userUrl
*/

export const onOrgRemoveMemberAuditEntry = (fields?: string) => `
    ... on OrgRemoveMemberAuditEntry {
        id
        ${fields}
    }
`


/**
* @description Github Graphql onOrgRemoveOutsideCollaboratorAuditEntry
* @defaultVariables id
* @queryVariables id
* action

* actor {
    onBot
    onOrganization
    onUser
}

* actorIp

* actorLocation {

*   city
            
*   country
            
*   countryCode
            
*   region

*   regionCode
          
* }

* actorLogin

* actorResourcePath
          
* actorUrl
          
* createdAt

* membershipTypes

* Organization
    
* operationType
    
* organizationName
    
* organizationResourcePath
    
* organizationUrl

* reason

* user {
    User
}

* userLogin
    
* userResourcePath

* userUrl
*/

export const onOrgRemoveOutsideCollaboratorAuditEntry = (fields?: string) => `
    ... on OrgRemoveOutsideCollaboratorAuditEntry {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onOrgRestoreMemberAuditEntry
* @defaultVariables id
* @queryVariables id
* action

* actor {
    onBot
    onOrganization
    onUser
}

* actorIp

* actorLocation {

*   city
            
*   country
            
*   countryCode
            
*   region

*   regionCode
          
* }

* actorLogin

* actorResourcePath
          
* actorUrl
          
* createdAt

* membershipTypes

* Organization
    
* operationType
    
* organizationName
    
* organizationResourcePath
    
* organizationUrl

* restoredCustomEmailRoutingsCount
          
* restoredIssueAssignmentsCount
          
* restoredMemberships {
    onOrgRestoreMemberMembershipOrganizationAuditEntryData

    onOrgRestoreMemberMembershipRepositoryAuditEntryData
     
    onOrgRestoreMemberMembershipTeamAuditEntryData
}
          
* restoredMembershipsCount
          
* restoredRepositoriesCount
          
* restoredRepositoryStarsCount
          
* restoredRepositoryWatchesCount

* user {
}
User

* userLogin
    
* userResourcePath

* userUrl
*/

export const onOrgRestoreMemberAuditEntry = (fields?: string) => `
    ... on OrgRestoreMemberAuditEntry {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onOrgRestoreMemberMembershipOrganizationAuditEntryData
* @fields
* Repository
*
* organizationName

* organizationResourcePath

* organizationUrl
*/

export const onOrgRestoreMemberMembershipOrganizationAuditEntryData = (fields?: string) => `
    ... on OrgRestoreMemberMembershipOrganizationAuditEntryData {
        id
        ${fields}
    }
`


/**
* @description Github Graphql onOrgRestoreMemberMembershipOrganizationAuditEntryData
* @fields
* Repository
*
* organizationName

* organizationResourcePath

* organizationUrl
*/

export const onOrgRestoreMemberMembershipRepositoryAuditEntryData = (fields?: string) => `
    ... on OrgRestoreMemberMembershipRepositoryAuditEntryData {
        id
        ${fields}
    }
`
/**
* @description Github Graphql onUnpinnedEvent
* @fields
** actor { Owner}
** createdAt
** id
** issue { Issue }
*/

export const onUnpinnedEvent = (fields: string = "") => `
    ... on UnpinnedEvent {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onPullRequestCommit
* @fields 
** Commit
** id
** PullRequest
** resourcePath
** url
*/

export const onPullRequestCommit = (fields: string = "") => `
    ... on PullRequestCommit {
        ${fields}
    }
`

/**
* @description Github Graphql onOrgRestoreMemberMembershipTeamAuditEntryData
* @fields
* Team
*
* teamName

* teamResourcePath

* teamUrl
*/

export const onOrgRestoreMemberMembershipTeamAuditEntryData = (fields?: string) => `
    ... on OrgRestoreMemberMembershipTeamAuditEntryData {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onPullRequestCommitCommentThread
* @fields
** Comments
** Commit
** id
** path
** position
** PullRequest
** Repository
*/

export const onPullRequestCommitCommentThread = (fields: string = "") => `
    ... on PullRequestCommitCommentThread {
        ${fields}
    }
`
/**
* @description Github Graphql onOrgUnblockUserAuditEntry
* @defaultVariables id
* @queryVariables id
* action
* actor {
    onBot
    onOrganization
    onUser
}

* actorIp

* actorLocation {

*   city
            
*   country
            
*   countryCode
            
*   region

*   regionCode
          
* }

* actorLogin

* actorResourcePath
          
* actorUrl
          
* blockedUser {
    User
}

* blockedUserName

* blockedUserResourcePath
          
* blockedUserUrl

* createdAt

* operationType
    
* Organization
    
* organizationName
 
* organizationResourcePath
    
* organizationUrl

* permission

* user {
    User
}

* userLogin
    
* userResourcePath

* userUrl
*/

export const onOrgUnblockUserAuditEntry = (fields?: string) => `
    ... on OrgUnblockUserAuditEntry {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onOrgUpdateDefaultRepositoryPermissionAuditEntry
* @defaultVariables id
* @queryVariables id
* action
* actor {
    onBot
    onOrganization
    onUser
}

* actorIp

/**
* @description Github Graphql onPullRequestRevisionMarker
* @fields
** __typename
** createdAt
** lastSeenCommit
** PullRequest
*/

*   city
            
*   country
            
*   countryCode
            
*   region

*   regionCode
          
* }

* actorLogin

* actorResourcePath
          
* actorUrl
          
* createdAt

* operationType
    
* Organization
    
* organizationName
 
* organizationResourcePath
    
* organizationUrl

* permission

* permissionWas

* user {
    User
}

* userLogin
    
* userResourcePath

* userUrl
*/

export const OrgUpdateDefaultRepositoryPermissionAuditEntry = (fields?: string) => `
    ... on OrgUpdateDefaultRepositoryPermissionAuditEntry {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onReadyForReviewEvent
* @fields
** actor { Owner }
** createdAt
** id
** PullRequest
*/

export const onReadyForReviewEvent = (fields: string = "") => `
    ... on ReadyForReviewEvent {
        ${fields}
    }
`

/**
* @description Github Graphql onOrgUpdateMemberAuditEntry
* @defaultVariables id
* @queryVariables id
* action
* actor {
    onBot
    onOrganization
    onUser
}

* actorIp

* actorLocation {

*   city
            
*   country
            
*   countryCode
            
*   region

*   regionCode
          
* }

* actorLogin

* actorResourcePath
          
* actorUrl
          
* createdAt

* operationType
    
* Organization
    
* organizationName
 
* organizationResourcePath
    
* organizationUrl

* permission

* permissionWas

* user {
    User
}

* userLogin
    
* userResourcePath

* userUrl
*/

export const onOrgUpdateMemberAuditEntry = (fields?: string) => `
    ... on OrgUpdateMemberAuditEntry {
        id
        ${fields}
    }
`


/**
* @description Github Graphql onOrgUpdateMemberRepositoryCreationPermissionAuditEntry
* @defaultVariables id
* @queryVariables id
* action

* actor {
    onBot
    onOrganization
    onUser
}

* actorIp

* actorLocation {

*   city
            
*   country
            
*   countryCode
            
*   region

*   regionCode
          
* }

* actorLogin

* actorResourcePath
          
* actorUrl
          
* canCreateRepositories

* createdAt

* Organization
    
* operationType
    
* organizationName
    
* organizationResourcePath
    
* organizationUrl

* user {
    User
}

* userLogin
    
* userResourcePath

* userUrl

* visibility
*/

export const onOrgUpdateMemberRepositoryCreationPermissionAuditEntry = (fields?: string) => `
    ... on OrgUpdateMemberRepositoryCreationPermissionAuditEntry {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onTransferredEvent
* @fields
** id
** actor { Owner }
** createdAt
** fromRepository
** issue { Issue }
*/

export const onTransferredEvent = (fields: string = "") => `
    ... on TransferredEvent {
        ${fields}
    }
`

/**
* @description Github Graphql onOrgUpdateMemberRepositoryInvitationPermissionAuditEntry
* @defaultVariables id
* @queryVariables id
* action

* actor {
    onBot
    onOrganization
    onUser
}

* actorIp

* actorLocation {

*   city
            
*   country
            
*   countryCode
            
*   region

*   regionCode
          
* }

* actorLogin

* actorResourcePath
          
* actorUrl
          
* canInviteOutsideCollaboratorsToRepositories

* createdAt

* Organization
    
* operationType
    
* organizationName
    
* organizationResourcePath
    
* organizationUrl

* user {
    User
}

* userLogin
    
* userResourcePath

* userUrl

*/

export const onOrgUpdateMemberRepositoryInvitationPermissionAuditEntry = (fields?: string) => `
    ... on OrgUpdateMemberRepositoryInvitationPermissionAuditEntry {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onPrivateRepositoryForkingDisableAuditEntry
* @defaultVariables id
* @fields
** id
** action
** actor { onBot onUser }
** actorIp
** actorLocation { city country countryCode region regionCode }
** actorLogin
** actorResourcePath
** actorUrl
** createdAt
** enterpriseResourcePath
** enterpriseSlug
** enterpriseUrl
** organization { Organization }
** operationType
** organizationName
** organizationResourcePath
** organizationUrl
** Repository 
** repositoryName
** repositoryResourcePath
** repositoryUrl
** user { User }
** userLogin
** userResourcePath
** userUrl
*/

export const onPrivateRepositoryForkingDisableAuditEntry = (fields?: string) => `
    ... on PrivateRepositoryForkingDisableAuditEntry {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onPrivateRepositoryForkingEnableAuditEntry
* @defaultVariables id
* @fields
** id
** action
** actor { onBot onUser }
** actorIp
** actorLocation { city country countryCode region regionCode }
** actorLogin
** actorResourcePath
** actorUrl
** createdAt
** enterpriseResourcePath
** enterpriseSlug
** enterpriseUrl
** organization { Organization }
** operationType
** organizationName
** organizationResourcePath
** organizationUrl
** Repository 
** repositoryName
** repositoryResourcePath
** repositoryUrl
** user { User }
** userLogin
** userResourcePath
** userUrl
*/

export const onPrivateRepositoryForkingEnableAuditEntry = (fields?: string) => `
    ... on PrivateRepositoryForkingEnableAuditEntry {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onRepoAccessAuditEntry
* @defaultVariables id
* @fields
** id
** action
** actor { onBot onOrganization onUser }
** actorIp
** actorLocation { city country countryCode region regionCode }
** actorLogin
** actorResourcePath
** actorUrl
** createdAt
** organization { Organization }
** operationType
** organizationName
** organizationResourcePath
** Repository 
** repositoryName
** repositoryResourcePath
** repositoryUrl
** organizationUrl
** user { User }
** userLogin
** userResourcePath
** userUrl
** visibility
*/

export const onRepoAccessAuditEntry = (fields?: string) => `
    ... on RepoAccessAuditEntry {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onRepoAddMemberAuditEntry
* @defaultVariables id
* @fields
** id
** action
** actor { onBot onOrganization onUser }
** actorIp
** actorLocation { city country countryCode region regionCode }
** actorLogin
** actorResourcePath
** actorUrl
** createdAt
** organization { Organization }
** operationType
** organizationName
** organizationResourcePath
** Repository 
** repositoryName
** repositoryResourcePath
** repositoryUrl
** organizationUrl
** user { User }
** userLogin
** userResourcePath
** userUrl
** visibility
*/

export const onRepoAddMemberAuditEntry = (fields?: string) => `
    ... on RepoAddMemberAuditEntry {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onRepoAddTopicAuditEntry
* @defaultVariables id
* @fields
** id
** action
** actor { onBot onOrganization onUser }
** actorIp
** actorLocation { city country countryCode region regionCode }
** actorLogin
** actorResourcePath
** actorUrl
** createdAt
** organization { Organization }
** operationType
** organizationName
** organizationResourcePath
** Repository 
** repositoryName
** repositoryResourcePath
** repositoryUrl
** organizationUrl
** user { User }
** userLogin
** userResourcePath
** userUrl
** topic { Topic }
** topicName
*/

export const onRepoAddTopicAuditEntry = (fields?: string) => `
    ... on RepoAddTopicAuditEntry {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onRepoArchivedAuditEntry
* @defaultVariables id
* @fields
** id
** action
** actor { onBot onOrganization onUser }
** actorIp
** actorLocation { city country countryCode region regionCode }
** actorLogin
** actorResourcePath
** actorUrl
** createdAt
** organization { Organization }
** operationType
** organizationName
** organizationResourcePath
** Repository 
** repositoryName
** repositoryResourcePath
** repositoryUrl
** organizationUrl
** user { User }
** userLogin
** userResourcePath
** userUrl
** visibility
*/

export const onRepoArchivedAuditEntry = (fields?: string) => `
    ... on RepoArchivedAuditEntry {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onRepoChangeMergeSettingAuditEntry
* @defaultVariables id
* @queryVariables id
* action

* actor {
    onBot
    onOrganization
    onUser
}

* actorIp

* actorLocation {

*   city
            
*   country
            
*   countryCode
            
*   region

*   regionCode
          
* }

* actorLogin

* actorResourcePath
          
* actorUrl

* createdAt

* isEnabled
          
* mergeType

* Organization
    
* operationType
    
* organizationName
    
* organizationResourcePath
 
* Repository 

* repositoryName
          
* repositoryResourcePath
          
* repositoryUrl

* organizationUrl

* user {
    User
}

* userLogin
    
* userResourcePath

* userUrl

/**
* @description Github Graphql onRepoChangeMergeSettingAuditEntry
* @defaultVariables id
* @fields
** id
** action
** actor { onBot onOrganization onUser }
** actorIp
** actorLocation { city country countryCode region regionCode }
** actorLogin
** actorResourcePath
** actorUrl
** createdAt
** isEnabled
** mergeType
** organization { Organization }
** operationType
** organizationName
** organizationResourcePath
** Repository 
** repositoryName
** repositoryResourcePath
** repositoryUrl
** organizationUrl
** user { User }
** userLogin
** userResourcePath
** userUrl
*/

export const onRepoChangeMergeSettingAuditEntry = (fields?: string) => `
    ... on RepoChangeMergeSettingAuditEntry {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onRepoConfigDisableAnonymousGitAccessAuditEntry
* @defaultVariables id
* @fields
** id
** action
** actor { onBot onOrganization onUser }
** actorIp
** actorLocation { city country countryCode region regionCode }
** actorLogin
** actorResourcePath
** actorUrl
** createdAt
** organization { Organization }
** operationType
** organizationName
** organizationResourcePath
** Repository 
** repositoryName
** repositoryResourcePath
** repositoryUrl
** organizationUrl
** user { User }
** userLogin
** userResourcePath
** userUrl
*/

export const onRepoConfigDisableAnonymousGitAccessAuditEntry = (fields?: string) => `
    ... on RepoConfigDisableAnonymousGitAccessAuditEntry {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onRepoConfigDisableCollaboratorsOnlyAuditEntry
* @defaultVariables id
* @fields 
** id
** action
** actor { onBot onOrganization onUser }
** actorIp
** actorLocation { city country countryCode region regionCode }
** actorLogin
** actorResourcePath
** actorUrl
** createdAt
** organization { Organization }
** operationType
** organizationName
** organizationResourcePath
** Repository 
** repositoryName
** repositoryResourcePath
** repositoryUrl
** organizationUrl
** user { User }
** userLogin
** userResourcePath
** userUrl
*/

export const onRepoConfigDisableCollaboratorsOnlyAuditEntry = (fields?: string) => `
    ... on RepoConfigDisableCollaboratorsOnlyAuditEntry {
        id
        ${fields}
    }
`


/**
* @description Github Graphql onRepoConfigDisableContributorsOnlyAuditEntry
* @defaultVariables id
* @fields
** id
** action
** actor { onBot onOrganization onUser }
** actorIp
** actorLocation { city country countryCode region regionCode }
** actorLogin
** actorResourcePath
** actorUrl
** createdAt
** organization { Organization }
** operationType
** organizationName
** organizationResourcePath
** Repository 
** repositoryName
** repositoryResourcePath
** repositoryUrl
** organizationUrl
** user { User }
** userLogin
** userResourcePath
** userUrl
*/

export const onRepoConfigDisableContributorsOnlyAuditEntry = (fields?: string) => `
    ... on RepoConfigDisableContributorsOnlyAuditEntry {
        id
        ${fields}
    }
`
/**
* @description Github Graphql onRepoConfigDisableSockpuppetDisallowedAuditEntry
* @defaultVariables id
* @fields
** id
** action
** actor { onBot onOrganization onUser }
** actorIp
** actorLocation { city country countryCode region regionCode }
** actorLogin
** actorResourcePath
** actorUrl
** createdAt
** organization { Organization }
** operationType
** organizationName
** organizationResourcePath
** Repository 
** repositoryName
** repositoryResourcePath
** repositoryUrl
** organizationUrl
** user { User }
** userLogin
** userResourcePath
** userUrl

*/

export const onRepoConfigDisableSockpuppetDisallowedAuditEntry = (fields?: string) => `
    ... on RepoConfigDisableSockpuppetDisallowedAuditEntry {
        id
        ${fields}
    }
`
/**
* @description Github Graphql onRepoConfigEnableAnonymousGitAccessAuditEntry
* @defaultVariables id
* @queryVariables id
* action

* actor {
    onBot
    onOrganization
    onUser
}

* actorIp

* actorLocation {

*   city
            
*   country
            
*   countryCode
            
*   region

*   regionCode
          
* }

* actorLogin

* actorResourcePath
          
* actorUrl

* createdAt

* Organization
    
* operationType
    
* organizationName
    
* organizationResourcePath
 
* Repository 

* repositoryName
          
* repositoryResourcePath
          
* repositoryUrl

* organizationUrl

* user {
    User
}

* userLogin
    
* userResourcePath

* userUrl

*/

export const onRepoConfigEnableAnonymousGitAccessAuditEntry = (fields?: string) => `
    ... on RepoConfigEnableAnonymousGitAccessAuditEntry {
        id
        ${fields}
    }
`
/**
* @description Github Graphql onRepoConfigEnableCollaboratorsOnlyAuditEntry
* @defaultVariables id
* @queryVariables id
* action

* actor {
    onBot
    onOrganization
    onUser
}

* actorIp

* actorLocation {

*   city
            
*   country
            
*   countryCode
            
*   region

*   regionCode
          
* }

* actorLogin

* actorResourcePath
          
* actorUrl

* createdAt

* Organization
    
* operationType
    
* organizationName
    
* organizationResourcePath
 
* Repository 

* repositoryName
          
* repositoryResourcePath
          
* repositoryUrl

* organizationUrl

* user {
    User
}

* userLogin
    
* userResourcePath

* userUrl

*/

export const onRepoConfigEnableCollaboratorsOnlyAuditEntry = (fields?: string) => `
    ... on RepoConfigEnableCollaboratorsOnlyAuditEntry {
        id
        ${fields}
    }
`
/**
* @description Github Graphql onRepoConfigEnableContributorsOnlyAuditEntry
* @defaultVariables id
* @fields
** id
** action
** actor { onBot onOrganization onUser }
** actorIp
** actorLocation { city country countryCode region regionCode }
** actorLogin
** actorResourcePath
** actorUrl
** createdAt
** organization { Organization }
** operationType
** organizationName
** organizationResourcePath
** Repository 
** repositoryName
** repositoryResourcePath
** repositoryUrl
** organizationUrl
** user { User }
** userLogin
** userResourcePath
** userUrl
*/

export const onRepoConfigEnableContributorsOnlyAuditEntry = (fields?: string) => `
    ... on RepoConfigEnableContributorsOnlyAuditEntry {
        id
        ${fields}
    }
`
/**
* @description Github Graphql onRepoConfigEnableSockpuppetDisallowedAuditEntry
* @defaultVariables id
* @fields
** id
** action
** actor { onBot onOrganization onUser }
** actorIp
** actorLocation { city country countryCode region regionCode }
** actorLogin
** actorResourcePath
** actorUrl
** createdAt
** organization { Organization }
** operationType
** organizationName
** organizationResourcePath
** Repository 
** repositoryName
** repositoryResourcePath
** repositoryUrl
** organizationUrl
** user { User }
** userLogin
** userResourcePath
** userUrl
*/

export const onRepoConfigEnableSockpuppetDisallowedAuditEntry = (fields?: string) => `
    ... on RepoConfigEnableSockpuppetDisallowedAuditEntry {
        id
        ${fields}
    }
`
/**
* @description Github Graphql onRepoConfigUnlockAnonymousGitAccessAuditEntry
* @defaultVariables id
* @fields
** id
** action
** actor { onBot onOrganization onUser }
** actorIp
** actorLocation { city country countryCode region regionCode }
** actorLogin
** actorResourcePath
** actorUrl
** createdAt
** organization { Organization }
** operationType
** organizationName
** organizationResourcePath
** Repository 
** repositoryName
** repositoryResourcePath
** repositoryUrl
** organizationUrl
** user { User }
** userLogin
** userResourcePath
** userUrl
*/

export const onRepoConfigUnlockAnonymousGitAccessAuditEntry = (fields?: string) => `
    ... on RepoConfigUnlockAnonymousGitAccessAuditEntry {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onRepoCreateAuditEntry
* @defaultVariables id
* @fields
** id
** action
** actor { onBot onOrganization onUser }
** actorIp
** actorLocation { city country countryCode region regionCode }
** actorLogin
** actorResourcePath
** actorUrl
** createdAt
** forkParentName
** forkSourceName
** organization { Organization }
** operationType
** organizationName
** organizationResourcePath
** Repository 
** repositoryName
** repositoryResourcePath
** repositoryUrl
** organizationUrl
** user { User }
** userLogin
** userResourcePath
** userUrl
** visibility
*/

* actor {
    onBot
    onOrganization
    onUser
}

* actorIp

* actorLocation {

*   city
            
*   country
            
*   countryCode
            
*   region

*   regionCode
          
* }

* actorLogin

* actorResourcePath
          
* actorUrl

* createdAt

* forkParentName
          
* forkSourceName

* Organization
    
* operationType
    
* organizationName
    
* organizationResourcePath
 
* Repository 

* repositoryName
          
* repositoryResourcePath
          
* repositoryUrl

* organizationUrl

* user {
    User
}

* userLogin
    
* userResourcePath

* userUrl

* visibility
*/

export const onRepoCreateAuditEntry = (fields?: string) => `
    ... on RepoCreateAuditEntry {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onRepoDestroyAuditEntry
* @defaultVariables id
* @fields 
** id
** action
** actor { onBot onOrganization onUser }
** actorIp
** actorLocation { city country countryCode region regionCode }
** actorLogin
** actorResourcePath
** actorUrl
** createdAt
** organization { Organization }
** operationType
** organizationName
** organizationResourcePath
** Repository 
** repositoryName
** repositoryResourcePath
** repositoryUrl
** organizationUrl
** user { User }
** userLogin
** userResourcePath
** userUrl
** visibility
*/

export const onRepoDestroyAuditEntry = (fields?: string) => `
    ... on RepoDestroyAuditEntry {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onRepoRemoveMemberAuditEntry
* @defaultVariables id
* @queryVariables id
* action

* actor {
    onBot
    onOrganization
    onUser
}

* actorIp

* actorLocation {

*   city
            
*   country
            
*   countryCode
            
*   region

*   regionCode
          
* }

* actorLogin

* actorResourcePath
          
* actorUrl

* createdAt

* Organization
    
* operationType
    
* organizationName
    
* organizationResourcePath
 
* Repository 

* repositoryName
          
* repositoryResourcePath
          
* repositoryUrl

* organizationUrl

* user {
    User
}

* userLogin
    
* userResourcePath

* userUrl

/**
* @description Github Graphql onRepoRemoveMemberAuditEntry
* @defaultVariables id
* @fields
** id
** action
** actor { onBot onOrganization onUser }
** actorIp
** actorLocation { city country countryCode region regionCode }
** actorLogin
** actorResourcePath
** actorUrl
** createdAt
** organization { Organization }
** operationType
** organizationName
** organizationResourcePath
** Repository 
** repositoryName
** repositoryResourcePath
** repositoryUrl
** organizationUrl
** user { User }
** userLogin
** userResourcePath
** userUrl
** visibility
*/

export const onRepoRemoveMemberAuditEntry = (fields?: string) => `
    ... on RepoRemoveMemberAuditEntry {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onRepoRemoveTopicAuditEntry
* @defaultVariables id
* @fields 
** id
** action
** actor { onBot onOrganization onUser }
** actorIp
** actorLocation { city country countryCode region regionCode }
** actorLogin
** actorResourcePath
** actorUrl
** createdAt
** organization { Organization }
** operationType
** organizationName
** organizationResourcePath
** Repository 
** repositoryName
** repositoryResourcePath
** repositoryUrl
** organizationUrl
** user { User }
** userLogin
** userResourcePath
** userUrl
** visibility
*/

export const onRepoRemoveTopicAuditEntry = (fields?: string) => `
    ... on RepoRemoveTopicAuditEntry {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onRepositoryVisibilityChangeDisableAuditEntry
* @defaultVariables id
* @queryVariables id
* action
* actor {
    onBot
    onOrganization
    onUser
}

* actorIp

* actorLocation {

*   city
            
*   country
            
*   countryCode
            
*   region

*   regionCode
          
* }

* actorLogin

* actorResourcePath
          
* actorUrl
          
* createdAt

* enterpriseResourcePath
          
* enterpriseSlug
          
* enterpriseUrl

* Organization
    
* operationType
    
* organizationName
    
* organizationResourcePath
    
* organizationUrl

* user {
    User
}

* userLogin
    
* userResourcePath

* userUrl
*/

export const onRepositoryVisibilityChangeDisableAuditEntry = (fields?: string) => `
    ... on RepositoryVisibilityChangeDisableAuditEntry {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onRepositoryVisibilityChangeEnableAuditEntry
* @defaultVariables id
* @queryVariables id
* action
* actor {
    onBot
    onOrganization
    onUser
}

* actorIp

* actorLocation {

*   city
            
*   country
            
*   countryCode
            
*   region

*   regionCode
          
* }

* actorLogin

* actorResourcePath
          
* actorUrl
          
* createdAt

* enterpriseResourcePath
          
* enterpriseSlug
          
* enterpriseUrl

* Organization
    
* operationType
    
* organizationName
    
* organizationResourcePath
    
* organizationUrl

* user {
    User
}

* userLogin
    
* userResourcePath

* userUrl
*/

export const onRepositoryVisibilityChangeEnableAuditEntry = (fields?: string) => `
    ... on RepositoryVisibilityChangeEnableAuditEntry {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onTeamAddMemberAuditEntry
* @defaultVariables id
* @queryVariables id
* action
* actor {
    onBot
    onOrganization
    onUser
}

* actorIp

* actorLocation {

*   city
            
*   country
            
*   countryCode
            
*   region

*   regionCode
          
* }

* actorLogin

* actorResourcePath
          
* actorUrl
          
* createdAt

* isLdapMapped

* Organization
    
* operationType
    
* organizationName
    
* organizationResourcePath
    
* organizationUrl

* Team
*
* teamName

* teamResourcePath

* teamUrl
* user {
    User
}

* userLogin
    
* userResourcePath

* userUrl
*/

export const onTeamAddMemberAuditEntry = (fields?: string) => `
    ... on TeamAddMemberAuditEntry {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onTeamAddRepositoryAuditEntry
* @defaultVariables id
* @queryVariables id
* action
* actor {
    onBot
    onOrganization
    onUser
}

* actorIp

* actorLocation {

*   city
            
*   country
            
*   countryCode
            
*   region

*   regionCode
          
* }

* actorLogin

* actorResourcePath
          
* actorUrl
          
* createdAt

* isLdapMapped

* Organization
    
* operationType
    
* organizationName
    
* organizationResourcePath
    
* organizationUrl

* Team
*
* teamName

* teamResourcePath

* teamUrl
* user {
    User
}

* userLogin
    
* userResourcePath

* userUrl
*/

export const onTeamAddRepositoryAuditEntry = (fields?: string) => `
    ... on TeamAddRepositoryAuditEntry {
        id
        ${fields}
    }
`


/**
* @description Github Graphql onTeamChangeParentTeamAuditEntry
* @defaultVariables id
* @queryVariables id
* action
* actor {
    onBot
    onOrganization
    onUser
}

* actorIp

* actorLocation {

*   city
            
*   country
            
*   countryCode
            
*   region

*   regionCode
          
* }

* actorLogin

* actorResourcePath
          
* actorUrl
          
* createdAt

* isLdapMapped

* Organization
    
* operationType
    
* organizationName
    
* organizationResourcePath
    
* organizationUrl

* parentTeam {
    Team
}

* parentTeamName
          
* parentTeamNameWas
          
* parentTeamResourcePath
          
* parentTeamUrl

* parentTeamWas {
    Team
}
* parentTeamWasResourcePath

* parentTeamWasUrl
*
* Team
*
* teamName

* teamResourcePath

* teamUrl
* user {
    User
}

* userLogin
    
* userResourcePath

* userUrl
*/

export const onTeamChangeParentTeamAuditEntry = (fields?: string) => `
    ... on TeamChangeParentTeamAuditEntry {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onTeamRemoveMemberAuditEntry
* @defaultVariables id
* @queryVariables id
* action
* actor {
    onBot
    onOrganization
    onUser
}

* actorIp

* actorLocation {

*   city
            
*   country
            
*   countryCode
            
*   region

*   regionCode
          
* }

* actorLogin

* actorResourcePath
          
* actorUrl
          
* createdAt

* isLdapMapped

* Organization
    
* operationType
    
* organizationName
    
* organizationResourcePath
    
* organizationUrl

* Team
*
* teamName

* teamResourcePath

* teamUrl
* user {
    User
}

* userLogin
    
* userResourcePath

* userUrl
*/

export const onTeamRemoveMemberAuditEntry = (fields?: string) => `
    ... on TeamRemoveMemberAuditEntry {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onCreatedRepositoryContribution
** isRestricted
** occurredAt
** Repository
** resourcePath
** url
** user { User }
*/

export const onCreatedRepositoryContribution = (fields: string) => `
   ... on onCreatedRepositoryContribution {
      __typename
      ${fields}
   }
`

/**
* @description Github Graphql onTeamRemoveRepositoryAuditEntry
* @defaultVariables id
* @queryVariables id
* action
* actor {
    onBot
    onOrganization
    onUser
}

* actorIp

* actorLocation {

*   city
            
*   country
            
*   countryCode
            
*   region

*   regionCode
          
* }

* actorLogin

* actorResourcePath
          
* actorUrl
          
* createdAt

* isLdapMapped

* Organization
    
* operationType
    
* organizationName
    
* organizationResourcePath
    
* organizationUrl

* Team
*
* teamName

* teamResourcePath

* teamUrl
* user {
    User
}

* userLogin
    
* userResourcePath

* userUrl
*/

export const onTeamRemoveRepositoryAuditEntry = (fields?: string) => `
    ... on TeamRemoveRepositoryAuditEntry {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onMarketplaceListing
* @fields 
* MarketplaceListing
*/

export const onMarketplaceListing = (fields: string ) => `
    ... on MarketplaceListing {
        ${fields}
    }
`

/**
* @description Github Graphql onCodeofCoduct
* @fields 
* CodeofCoduct
*/

export const onCodeofCoduct = (fields: string ) => `
    ... on CodeofCoduct {
        ${fields}
    }
`

/**
* @description Github Graphql onEnterprise
* @fields
** Enterprise
*/

export const onEnterprise = (fields: string = '') => `
    ... on Enterprise {
        ${fields}
    }
`

/**
* @description Github Graphql onOrganization
* @fields
* Organization
*/

export const onOrganization = (fields: string = '') => `
    ... on Organization {
        ${fields}
    }
`

/**
* @description Github Graphql onPackage
* @fields
* Package
*/

export const onPackage = (fields: string = '') => `
    ... on Package {
        ${fields}
    }
`

/**
* @description Github Graphql onPackageVersion
* @fields
* PackageVersion
*/

export const onPackageVersion = (fields: string = '') => `
    ... on PackageVersion {
        ${fields}
    }
`

/**
* @description Github Graphql onPackageFile
* @fields
** id
** md5
** name
** Version
** sha1
** sha256
** size
** updatedAt
** url
*/

export const onPackageFile = (fields: string = '') => `
    ... on PackageFile {
        ${fields}
    }
`

/**
* @description Github Graphql onRelease
* @fields
* Release
*/

export const onRelease = (fields: string = '') => `
    ... on Release {
        ${fields}
    }
`

/**
* @description Github Graphql onProject
* @fields
* Project
*/

export const onProject = (fields: string = '') => `
    ... on Project {
        ${fields}
    }
`

/**
* @description Github Graphql onProjectColumn
* @fields
* Column
*/

export const onProjectColumn = (fields: string = '') => `
    ... on ProjectColumn {
        ${fields}
    }
`

/**
* @description Github Graphql onCard
* @fields
* Card
*/

export const onCard = (fields: string = '') => `
    ... on Card {
        ${fields}
    }
`

/**
* @description Github Graphql onUserContentEdit
* @fields
* UserContentEdit
*/

export const onUserContentEdit = (fields: string = '') => `
    ... on UserContentEdit {
        ${fields}
    }
`

/**
* @description Github Graphql onLabel
* @fields
* Label
*/

export const onLabel = (fields: string = '') => `
    ... on Label {
        ${fields}
    }
`

/**
* @description Github Graphql onReaction
* @fields
* Reaction
*/

export const onReaction = (fields: string = '') => `
    ... on Reaction {
        ${fields}
    }
`

/**
* @description Github Graphql onRepository
* @fields
* Repository
*/

export const onRepository = (fields: string = '') => `
    ... on Repository {
        ${fields}
    }
`

/**
* @description Github Graphql onLicense
* @fields
* License
*/

export const onLicense = (fields: string = '') => `
    ... on License {
        ${fields}
    }
`

/**
* @description Github Graphql onBranchProtectionRule
* @fields
* BranchProtectionRule
*/

export const onBranchProtectionRule = (fields: string = '') => `
    ... on BranchProtectionRule {
        ${fields}
    }
`

/**
* @description Github Graphql onRef
* @fields
* Ref
*/

export const onRef = (fields: string = '') => `
    ... on Ref {
        ${fields}
    }
`

/**
* @description Github Graphql onPushAllowance
* @fields
** actor { onApp onTeam onUser }
** BranchProtectionRule
** id
*/

export const onPushAllowance = (fields: string = '') => `
    ... on PushAllowance {
        ${fields}
    }
`

/**
* @description Github Graphql onTeam
* @fields
* Team
*/

export const onTeam = (fields: string = '') => `
    ... on Team {
        ${fields}
    }
`

/**
* @description Github Graphql onUserStatus
* @fields
* Status
*/

export const onUserStatus = (fields: string = '') => `
    ... on UserStatus {
        ${fields}
    }
`

/**
* @description Github Graphql onTeamDiscussion
* @fields
* Discussion
*/

export const onTeamDiscussion = (fields: string = '') => `
    ... on TeamDiscussion {
        ${fields}
    }
`

/**
* @description Github Graphql onTeamDiscussionComment
* @fields
* Comment
*/

export const onTeamDiscussionComment = (fields: string = '') => `
    ... on TeamDiscussionComment {
        ${fields}
    }
`

/**
* @description Github Graphql onOrganizationInvitation
* @fields
* Invitation
*/

export const onOrganizationInvitation = (fields: string = '') => `
    ... on OrganizationInvitation {
        ${fields}
    }
`

/**
* @description Github Graphql onReviewDismissalAllowance
* @fields
** actor { onApp onTeam onUser }
** BranchProtectionRule
** id
*/

export const onReviewDismissalAllowance = (fields: string = '') => `
    ... on ReviewDismissalAllowance {
        ${fields}
    }
`

/**
* @description Github Graphql onCommitComment
* @fields
* Comment
*/

export const onCommitComment = (fields: string = '') => `
    ... on CommitComment {
        ${fields}
    }
`

/**
* @description Github Graphql onCheckSuite
* @fields
* CheckSuite
*/

export const onCheckSuite = (fields: string = '') => `
    ... on CheckSuite {
        ${fields}
    }
`

/**
* @description Github Graphql onPush
* @fields
** id
** nextSha
** permalink
** previousSha
** pusher { User }
** Repository
*/

export const onPush = (fields: string = '') => `
    ... on Push {
        ${fields}
    }
`

/**
* @description Github Graphql onDeployment
* @fields
* Deployment
*/

export const onDeployment = (fields: string = '') => `
    ... on Deployment {
        ${fields}
    }
`

/**
* @description Github Graphql onDeploymentStatus
* @fields
** id
** createdAt
** creator { Owner }
** Deployment
** description
** environmentUrl
** logUrl
** state
** updatedAt
*/

export const onDeploymentStatus = (fields: string = '') => `
    ... on DeploymentStatus {
        ${fields}
    }
`

/**
* @description Github Graphql onStatus
* @fields
** CombinedContexts
** Commit
** Context
** Contexts
** id
** state
*/

export const onStatus = (fields: string = '') => `
    ... on Status {
        ${fields}
    }
`

/**
* @description Github Graphql onStatusCheckRollup
* @fields
** Commit
** Contexts
** id
** state
*/

export const onStatusCheckRollup = (fields: string = '') => `
    ... on StatusCheckRollup {
        ${fields}
    }
`

/**
* @description Github Graphql onDeployKey
* @fields
** id
** createdAt
** key
** readOnly
** title
** verified
*/

export const onDeployKey = (fields: string = '') => `
    ... on DeployKey {
        ${fields}
    }
`

/**
* @description Github Graphql onLanguage
* @fields
** id
** name
** color
*/

export const onLanguage = (fields: string = '') => `
    ... on Language {
        ${fields}
    }
`

/**
* @description Github Graphql onMilestone
* @fields
* Milestone
*/

export const onMilestone = (fields: string = '') => `
    ... on Milestone {
        ${fields}
    }
`

/**
* @description Github Graphql onPinnedIssue
* @fields
** databaseId
** id
** Issue
** pinnedBy {Owner}
** Repository
*/

export const onPinnedIssue = (fields: string = '') => `
    ... on PinnedIssue {
        ${fields}
    }
`

/**
* @description Github Graphql onRepositoryTopic
* @fields
** id
** resourcePath
** Topic
** url
*/

export const onRepositoryTopic = (fields: string = '') => `
    ... on RepositoryTopic {
        ${fields}
    }
`

/**
* @description Github Graphql onTopic
* @fields
** Topic
*/

export const onTopic = (fields: string = '') => `
    ... on Topic {
        ${fields}
    }
`

/**
* @description Github Graphql onRepositoryVulnerabilityAlert
* @fields
** createdAt
** dismissReason
** dismissedAt
** dismisser { User }
** id
** SecurityVulnerability
** SecurityAdvisory
** Repository
** vulnerableRequirements
** vulnerableManifestPath
** vulnerableManifestFilename   
*/

export const onRepositoryVulnerabilityAlert = (fields: string = '') => `
    ... on RepositoryVulnerabilityAlert {
        ${fields}
    }
`

/**
* @description Github Graphql onSecurityAdvisory
* @fields
** SecurityAdvisory
*/

export const onSecurityAdvisory = (fields: string = '') => `
    ... on SecurityAdvisory {
        ${fields}
    }
`

/**
* @description Github Graphql onCWE
* @fields
** cweId
** description
** id
** name
*/

export const onCWE = (fields: string = '') => `
    ... on CWE {
        ${fields}
    }
`

/**
* @description Github Graphql onPullRequestReviewComment
* @fields
 ** author { Author }
 ** authorAssociation
 ** body
 ** bodyHTML
 ** bodyText
 ** bodyVersion
 ** createdAt
 ** createdViaEmail
 ** Commit
 ** databaseId
 ** diffHunk
 ** draftedAt
 ** Discussion
 ** editor { Editor }
 ** id
 ** includesCreatedEdit
 ** isMinimized
 ** lastEditedAt
 ** minimizedReason
 ** number
 ** originalCommit { Comment }
 ** originalPosition
 ** outdated
 ** path
 ** position
 ** publishedAt
 ** Repository
 ** replyTo { User } 
 ** Reactions
 ** ReactionGroups
 ** PullRequestReview
 ** PullRequest
 ** ReactionGroups
 ** resourcePath
 ** state
 ** updatedAt
 ** url
 ** UserContentEdits
 ** viewerCanDelete
 ** viewerCanMinimize
 ** viewerCanReact
 ** viewerCanUpdate
 ** viewerCannotUpdateReasons
 ** viewerDidAuthor
*/

export const onPullRequestReviewComment = (fields: string = '') => `
    ... on PullRequestReviewComment {
        ${fields}
    }
`

/**
* @description Github Graphql onReviewRequest
* @fields 
** asCodeOwner
** databaseId
** requestedReviewer { onMannequin onTeam onUser}
** requestedReviewer
** id
** PullRequest
*/

export const onReviewRequest = (fields: string ) => `
    ... on ReviewRequest {
        ${fields}
    }
`

/**
* @description Github Graphql onMentionedEvent
* @fields
** actor { Owner }
** createdAt
** databaseId
** id
*/

export const onMentionedEvent = (fields: string = '') => `
    ... on MentionedEvent {
        ${fields}
    }
`

/**
* @description Github Graphql onGist
* @fields
** Gist
*/

export const onGist = (fields: string = "") => `
    ... on Gist {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onGist
* @fields
 ** author { Author }
 ** authorAssociation
 ** bodyHTML
 ** bodyText
 ** body
 ** bodyVersion
 ** createdAt
 ** createdViaEmail
 ** Gist
 ** databaseId
 ** editor { Editor }
 ** id
 ** includesCreatedEdit
 ** lastEditedAt
 ** number
 ** path
 ** position
 ** publishedAt
 ** UserContentEdits
 ** viewerCanDelete
 ** viewerCanMinimize
 ** viewerCanUpdate
 ** viewerCannotUpdateReasons
 ** viewerDidAuthor
*/

export const onGistComment = (fields: string = "") => `
    ... on GistComment {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onSponsorsListing
* @fields
** SponsorsListing
*/

export const onSponsorsListing = (fields: string = "") => `
    ... on SponsorsListing {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onSponsorsTier
* @fields
** SponsorsTier
*/

export const onSponsorsTier = (fields: string = "") => `
    ... on SponsorsListing {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onSponsorship
* @fields
** Sponsorship
*/

export const onSponsorship = (fields: string = "") => `
    ... on Sponsorship {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onPublicKey
* @fields
** accessedAt
** createdAt
** fingerprint
** id
** isReadOnly
** key
** updatedAt
*/

export const onPublicKey = (fields: string = "") => `
    ... on PublicKey {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onSavedReply
* @fields
** body
** bodyHTML
** databaseId
** id
** title
** user { Owner }
*/

export const onSavedReply = (fields: string = "") => `
    ... on SavedReply {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onReleaseAsset
* @fields
** name
** contentType
** createdAt
** downloadCount
** downloadUrl
** id
** Release
** size
** updatedAt
** uploadedBy { User }
** url
*/

export const onReleaseAsset = (fields: string = "") => `
    ... on ReleaseAsset {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onMembersCanDeleteReposEnableAuditEntry
* @defaultVariables id
* @fields
** id
** action
** actor { onBot onOrganization onUser }
** actorIp
** actorLocation { city country countryCode region regionCode }
** actorLogin
** actorResourcePath
** actorUrl
** createdAt
** enterpriseResourcePath
** enterpriseSlug
** enterpriseUrl
** Organization
** operationType
** organizationName
** organizationResourcePath
** organizationUrl
** user { User }
** userLogin
** userResourcePath
** userUrl
*/

export const onMembersCanDeleteReposEnableAuditEntry = (fields?: string) => `
    ... on MembersCanDeleteReposEnableAuditEntry {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onRepoConfigLockAnonymousGitAccessAuditEntry
* @defaultVariables id
* @fields
** id
** action
** actor { onBot onOrganization onUser }
** actorIp
** actorLocation { city country countryCode region regionCode }
** actorLogin
** actorResourcePath
** actorUrl
** createdAt
** Organization
** operationType
** organizationName
** organizationResourcePath
** organizationUrl
** user { User }
** userLogin
** userResourcePath
** userUrl
*/

export const onRepoConfigLockAnonymousGitAccessAuditEntry = (fields?: string) => `
    ... on RepoConfigLockAnonymousGitAccessAuditEntry {
        id
        ${fields}
    }
`

/**
* @description Github Graphql onVerifiableDomain
* @fields
** createdAt
** databaseId
** dnsHostName
** domain
** hasFoundHostName
** hasFoundVerificationToken
** id
** isRequiredForPolicyEnforcement
** isVerified
** owner { onEnterprise onOrganization}
** punycodeEncodedDomain
** tokenExpirationTime
** updatedAt
** verificationToken
*/

export const onVerifiableDomain = (fields: string) => `
   ... on VerifiableDomain {
      ${fields}
   }
`

/**
* @description Github Graphql onIpAllowListEntry
* @fields
** allowListValue
** createdAt
** id
** isActive
** name
** owner { onEnterprise onOrganization}
** updatedAt
*/

export const onIpAllowListEntry = (fields: string) => `
   ... on IpAllowListEntry {
      ${fields}
   }
`

/**
* @description Github Graphql onOrganizationIdentityProvider
* @fields
** digestMethod
** ExternalIdentities
** id
** idpCertificate
** issuer
** Organization
** signatureMethod
** ssoUrl
*/

export const onOrganizationIdentityProvider = (fields: string) => `
   ... on OrganizationIdentityProvider {
      ${fields}
   }
`

/**
* @description Github Graphql onExternalIdentity
* @fields
** ExternalIdentity
*/

export const onExternalIdentity = (fields: string) => `
   ... on ExternalIdentity {
      ${fields}
   }
`

/**
* @description Github Graphql onEnterpriseServerInstallation
* @fields
** createdAt
** customerName
** hostName
** id
** isConnected
** updatedAt
** UserAccounts
** UserAccountsUploads
*/

export const onEnterpriseServerInstallation = (fields: string) => `
   ... on EnterpriseServerInstallation {
      ${fields}
   }
`

/**
* @description Github Graphql onEnterpriseServerUserAccount
* @fields
** createdAt
** Emails
** EnterpriseServerInstallation
** id
** isSiteAdmin
** login
** profileName
** remoteCreatedAt
** remoteUserId
** updatedAt
*/

export const onEnterpriseServerUserAccount = (fields: string) => `
   ... on EnterpriseServerUserAccount {
      ${fields}
   }
`

/**
* @description Github Graphql onEnterpriseServerUserAccountEmail
* @fields
** createdAt
** email
** id
** isPrimary
** updatedAt
** UserAccount
*/

export const onEnterpriseServerUserAccountEmail = (fields: string) => `
   ... on EnterpriseServerUserAccountEmail {
      ${fields}
   }
`

/**
* @description Github Graphql onEnterpriseServerUserAccountsUpload
* @fields
** createdAt
** Enterprise
** EnterpriseServerInstallation
** id
** name
** syncState
** updatedAt
*/

export const onEnterpriseServerUserAccountsUpload = (fields: string) => `
   ... on EnterpriseServerUserAccountsUpload {
      ${fields}
   }
`

/**
* @description Github Graphql onEnterpriseRepositoryInfo
* @fields
** id
** isPrivate
** name
** nameWithOwner
*/

export const onEnterpriseRepositoryInfo = (fields: string) => `
   ... on EnterpriseRepositoryInfo {
      ${fields}
   }
`

/**
* @description Github Graphql onEnterpriseAdministratorInvitation
* @fields
** Invitation
*/

export const onEnterpriseAdministratorInvitation = (fields: string) => `
   ... on EnterpriseAdministratorInvitation {
      ${fields}
   }
`

/**
* @description Github Graphql onRepositoryInvitation
* @fields
** Invitation
*/

export const onRepositoryInvitation = (fields: string) => `
   ... on RepositoryInvitation {
      ${fields}
   }
`

/**
* @description Github Graphql onEnterpriseIdentityProvider
* @fields
** digestMethod
** ExternalIdentities
** Enterprise
** id
** idpCertificate
** issuer
** recoveryCodes
** signatureMethod
** ssoUrl
*/

export const onEnterpriseIdentityProvider = (fields: string) => `
   ... on EnterpriseIdentityProvider {
      ${fields}
   }
`

/**
* @description Github Graphql onMarketplaceCategory
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

export const onMarketplaceCategory = (fields: string) => `
   ... on MarketplaceCategory {
      ${fields}
   }
`

/**
* @description Github Graphql onPackageTag
* @fields
** id
** name
** Version
*/

export const onPackageTag = (fields: string) => `
   ... on PackageTag {
      ${fields}
   }
`
