/**
 * @description Github Graphql API response type for Viewer query
 */
export declare interface Viewer {
    viewer: UserInfo; // eslint-disable-line 
}

export declare interface UserInfo {
    anyPinnableItems: boolean;
    avatarUrl: string | null;
    bio: string | null;
    bioHTML: string | null;
    commitComments: UserCommitContents;
    company: string | null;
    companyHTML: string | null;
    contributionsCollection: ContributionsCollection;
    createdAt: string;
    databaseId: number;
    email: string;
    followers: Followers;
    following: Following;
    gist: Gist;
    gistComments: GistComments;
    gists: Gists;
    hasSponsorsListing: boolean;
    hovercard: HoverCard;
    id: number;
    interactionAbility: {
        expiresAt: string;
        limit: number;
        origin: string;
    }
    isBountyHunter: boolean;
    isCampusExpert: boolean;
    isDeveloperProgramMember: boolean;
    isEmployee: boolean;
    isSponsoredBy: boolean;
    isSponsoringViewer: boolean;
    isHireable: boolean;
    isViewer: boolean;
    issueComments: IssueComments;
    issues: Issues;
    itemShowcase: {
        hasPinnedItems: boolean;
        items: {
            edges: [{
                node: UserItems
            }];
            nodes: UserItems[];
            pageInfo: PageInfo;
            totalCount: number;
        }
    }
    location: string;
    login: string;
    name: string;
    organization: Organization
    organizationVerifiedDomainEmails: string[];
    organizations: Organizations;
    packages: {
        edges: [{
            cursor: string;
            node: Package;
        }];
        nodes: Package[];
        pageInfo: PageInfo;
        totalCount: number;
    }
    pinnableItems: {
        edges: [{
            cursor: string;
            node: [
                Gist, Repositories
            ]
        }]
        nodes: UserItems[];
        pageInfo: PageInfo;
        totalCount: number
    };
    pinnedItems: {
        edges: [{
            cursor: string;
            node: [
                Gist, Repositories
            ]
        }]
        nodes: UserItems[]
        pageInfo: PageInfo;
        totalCount: number
    };
    pinnedItemsRemaining: number;
    url: string;
    project: Project;
    projects: {
        edges: [{
            cursor: string;
            node: Project;
        }]
        nodes: Project[];
        pageInfo: PageInfo;
        totalCount: number
    }
    projectsResourcePath: string;
    projectsUrl: string;
    publicKeys: {
        edges: [{
            cursor: string;
            node: {
                accessedAt: string
                createdAt: string
                fingerprint: string
                id: number;
                isReadOnly: boolean
                key: string
                updatedAt: string
            };
        }]
        nodes: [{
            accessedAt: string
            createdAt: string
            fingerprint: string
            id: number;
            isReadOnly: boolean
            key: string
            updatedAt: string
        }]
        pageInfo: PageInfo;
        totalCount: number;
    }
    pullRequests: {
        edges: [{
            cursor: string,
            node: PullRequest
        }]
        nodes: PullRequest[]
        pageInfo: PageInfo;
        totalCount: number;
    }
    repositories: {
        edges: [{
            cursor: string,
            node: Repository
        }]
        nodes: Repository[]
        pageInfo: PageInfo;
        totalCount: number;
        totalDiskUsage: number
    }
    repositoriesContributedTo: {
        edges: [{
            cursor: string,
            node: Repository
        }]
        nodes: Repository[]
        pageInfo: PageInfo;
        totalCount: number;
        totalDiskUsage: number;
    }
    repository: Repository;
    resourcePath: string;
    savedReplies: {
        edges: [{
            cursor: string,
            node: Reply
        }]
        nodes: Reply[]
        pageInfo: PageInfo;
        totalCount: number;
    }
    sponsorsListing: SponsorsListing;
    sponsorshipForViewerAsSponsor: SponsorShip;
    sponsorshipsAsMaintainer: {
        edges: [{
            cursor: string;
            node: SponsorShip;
        }]
        nodes: SponsorShip[];
        pageInfo: PageInfo;
        totalCount: number;
    }
    sponsorshipsAsSponsor: {
        edges: [{
            cursor: string;
            node: SponsorShip;
        }]
        nodes: SponsorShip[];
        pageInfo: PageInfo;
        totalCount: number;
    }
    starredRepositories: {
        edges: [{
            cursor: string;
            node: Repository;
        }]
        nodes: Repository[];
        pageInfo: PageInfo;
        isOverLimit: boolean;
        totalCount: number;
    }
    status: {
        createdAt: string;
        emoji: string;
        emojiHTML: string;
        expiresAt: string;
        id: number;
        indicatesLimitedAvailability: boolean;
        message: string;
        organization: Organization;
        updatedAt: string;
        user: User
    }
    topRepositories: {
        edges: [{
            cursor: string;
            node: Repository;
        }]
        nodes: Repository[];
        pageInfo: PageInfo;
        totalCount: number;
    }
    twitterUsername: string;
    updatedAt: string;
    viewerCanChangePinnedItems: boolean;
    viewerCanCreateProjects: boolean;
    viewerCanFollow: boolean
    viewerCanSponsor: boolean
    viewerIsFollowing: boolean
    viewerIsSponsoring: boolean
    watching: {
        edges: [{
            cursor: string;
            node: Repository;
        }]
        nodes: Repository[];
        pageInfo: PageInfo;
        totalCount: number;
    };
    websiteUrl: string;
}

export declare interface FileEntries {
    name: string;
    type: string;
    child?: {
        entries: FileEntries[];
    };
}

export declare interface FileEntriesContent {
    name: string;
    type: string;
    child: {
        text?: Blob | null;
        entries?: FileEntriesContent[];
    };
}

export declare interface File {
    encodedName: string;
    encoding: string;
    extension: string;
    isImage: boolean;
    isTruncated: boolean;
    language: {
        color: string
        id: number;
        name: string;
    }
    name: string;
    size: string;
    text: string;
}

export declare interface RepositoryContent {
    repository: null | {
        defaultBranchRef: {
            target: {
                files: {
                    entries: FileEntriesContent[];
                };
            };
        };
    };
}

export declare interface RepositoryDirectories {
    repository: null | {
        defaultBranchRef: {
            target: {
                files: {
                    entries: FileEntries[];
                };
            };
        };
    };
}

export declare interface Branches {
    repository: null | {
        branches: null | {
            edges: [{
                node: {
                    id: number;
                    name: string;
                    prefix: string;
                };
                cursor: string;
            }];
            pageInfo: {
                endCursor: string;
                hasNextPage: string;
                hasPreviousPage: string;
                startCursor: string;
            }
            totalCount: number;
        };
    };
}

export declare interface BranchContent {
    repository: null | {
        branch: null | {
            target: {
                files: {
                    entries: FileEntriesContent[];
                };
            };
        };
    };
}

export declare interface BranchDirectories {
    repository: null | {
        branch: null | {
            target: {
                files: {
                    entries: FileEntries[];
                };
            };
        };
    };
}

export declare interface Repository {
    repository: null | RepositoryInfo; //eslint-disable-line
}

export declare interface RepositoryInfo {
    createdAt: string;
    databaseId: number;
    description: string;
    descriptionHTML: string;
    diskUsage: number;
    forkCount: number;
    hasIssuesEnabled: boolean;
    hasProjectsEnabled: boolean;
    hasWikiEnabled: boolean;
    homepageUrl: string | null;
    id: number;
    isArchived: boolean;
    isDisabled: boolean;
    isFork: boolean;
    isLocked: boolean;
    isMirror: boolean;
    isPrivate: boolean;
    isTemplate: boolean;
    lockReason: string | null;
    mergeCommitAllowed: boolean;
    mirrorUrl: string | null;
    name: string;
    nameWithOwner: string;
    openGraphImageUrl: string;
    projectsResourcePath: string;
    projectsUrl: string;
    pushedAt: string;
    rebaseMergeAllowed: boolean;
    resourcePath: string;
    shortDescriptionHTML: string;
    squashMergeAllowed: boolean;
    sshUrl: string;
    tempCloneToken: string;
    updatedAt: string;
    url: string;
    usesCustomOpenGraphImage: boolean;
    viewerCanAdminister: boolean;
    viewerCanCreateProjects: boolean;
    viewerCanSubscribe: boolean;
    viewerCanUpdateTopics: boolean;
    viewerHasStarred: boolean;
    viewerPermission: string;
    viewerSubscription: string;
}

export declare interface CommitDirectories {
    repository: null | {
        commit: null | {
            files: {
                entries: FileEntries[];
            };
        };
    };
}

export declare interface CommitContent {
    repository: null | {
        commit: null | {
            files: {
                entries: FileEntriesContent[];
            };
        };
    };
}

export declare interface Branch {
    repository: null | {
        branch: null | {
            id: number,
            name: string,
            prefix: string,
        };
    };
}

export declare interface Commit {
    repository: null | {
        commit: null | {
            authoredByCommitter: boolean;
            authoredDate: string;
            changedFiles: number;
            commitUrl: string;
            committedDate: string;
            committedViaWeb: boolean;
            deletions: number;
            id: number;
            message: string;
            messageBody: string;
            messageBodyHTML: string;
            messageHeadline: string;
            messageHeadlineHTML: string;
            oid: number;
            pushedDate: string;
            resourcePath: string;
            tarballUrl: string;
            treeResourcePath: string;
            treeUrl: string;
            url: string;
            viewerCanSubscribe: boolean;
            viewerSubscription: string;
            zipballUrl: string;
        };
    };
}

export declare interface CodeOfConduct {
    codeOfConduct: null | {
        name: string;
        id: number;
        body: string;
        key: string;
        resourcePath: string;
        url: string;
    };
}

export declare interface Followers {
    edges: [{
        node: UserInfo;
        cursor: string;
    }];
    nodes: UserInfo[];
    pageInfo: PageInfo;
    totalCount: number;
}

export declare interface Following {
    edges: [{
        node: UserInfo;
        cursor: string;
    }];
    nodes: UserInfo[]
    pageInfo: PageInfo;
    totalCount: number;
}

export declare interface User {
    user: UserInfo;
}

export declare interface Repositories {
    user: {
        repositories: {
            edges: [{
                node: RepositoryInfo;
                cursor: string;
            }];
            pageInfo: {
                endCursor: string;
                hasNextPage: string;
                hasPreviousPage: string;
                startCursor: string;
            }
            totalCount: number;
        };
    };
}

export declare interface Author {
    avatarUrl: string;
    login: string;
    resourcePath: string;
    url: string;
}

export declare interface UserCommitContents {
    user: {
        commitComments: {
            edges: [{
                cursor: string;
                node: {
                    author: Author;
                    authorAssociation: string;
                    body: string;
                    bodyHTML: string;
                    bodyText: string;
                    createdAt: string;
                    createdViaEmail: string;
                    databaseId: number;
                    editor: Author | null;
                    id: number;
                    includesCreatedEdit: boolean;
                    isMinimized: boolean;
                    lastEditedAt: string | null;
                    minimizedReason: string | null;
                    path: string | null;
                    position: number | null;
                    publishedAt: string;
                    resourcePath: string;
                    updatedAt: string;
                    url: string;
                    viewerCanDelete: boolean;
                    viewerCanMinimize: boolean;
                    viewerCanReact: boolean;
                    viewerCanUpdate: boolean;
                    viewerCannotUpdateReasons: string[];
                }
            }] | [];
            pageInfo: PageInfo;
            totalCount: number;
        };
    };
}

export declare interface Issue {
    activeLockReason: string | null;
    author: Owner;
    body: string;
    bodyHTML: string;
    bodyText: string;
    closed: boolean;
    closedAt: string;
    createdAt: string;
    createdViaEmail: boolean;
    databaseId: number;
    editor: Owner;
    hovercard: HoverCard;
    id: number;
    includesCreatedEdit: boolean;
    lastEditedAt: string;
    locked: boolean;
    number: number;
    publishedAt: string;
    resourcePath: string;
    state: string;
    title: string;
    updatedAt: string;
    url: string;
    viewerCanReact: boolean;
    viewerCanSubscribe: boolean;
    viewerCanUpdate: boolean;
    viewerCannotUpdateReasons: string[];
    viewerDidAuthor: boolean;
    viewerSubscription: string;
}

export declare interface HoverCard {
    contexts: [{
        message: string;
        octicon: string
        relevantOrganizations: RelevantOrganizations;
        relevantTeams: RelevantTeams;
        reviewDecision: string;
        __typename: string;
        teamsResourcePath: string;
        teamsUrl: string;
        totalOrganizationCount: number;
        totalTeamCount: number;
        viewer: UserInfo
    }]
}
type TE = { name: 1, age: 2 }
export declare interface Team {
    ancestors: Team[]
    avatarUrl: string;
    childTeams: Team[]
    combinedSlug: string;
    createdAt: string;
    databaseId: number;
    description: string;

}

export declare interface Discussion {
    author: Owner;
    authorAssociation: string;
    body: string;
    bodyHTML: string;
    bodyText: string;
    bodyVersion: string;
    comments: Comments
    commentsResourcePath: string;
    commentsUrl: string;
    createdAt: string;
    createdViaEmail: boolean;
    databaseId: number;
    editor: Owner;
    id: number;
    includesCreatedEdit: boolean;
    isPinned: boolean;
    isPrivate: boolean;
    lastEditedAt: string;
    number: number;
    publishedAt: string;
    reactionGroups: ReactionGroup[];
}

export declare interface Owner extends EnterpriseUserAccount, Organization, UserInfo, Mannequin, Bot {
    avatarUrl: string;
    login: string;
    resourcePath: string;
    url: string;
}


export declare interface EnterpriseUserAccount {
    avatarUrl: string;
    createdAt: string;
    enterprise: Enterprise;
    id: number;
    login: string;
    name: string;
    organization: Organization;
    resourcePath: string;
    updatedAt: string;
    url: string;
}

export declare interface Enterprise {

}

export declare interface Organization {

}

export declare interface Mannequin {
    avatarUrl: string;
    createdAt: string;
    databaseId: number;
    email: string;
    id: number;
    login: string;
    resourcePath: string;
    updatedAt: string;
    url: string;
}

export declare interface Bot {
    avatarUrl: string;
    createdAt: string;
    databaseId: number;
    id: number;
    login: string;
    resourcePath: string
    updatedAt: string;
    url: string;
}

export declare interface ReactionGroup {
    content: string;
    createdAt: string;
    subject: Subject;
    users: Users;
    viewerHasReacted: boolean;
}

export declare interface Reaction {
    content: string;
    createdAt: string;
    databaseId: number
    id: number;
    reactable: Reactable;
}

export declare interface PageInfo {
    endCursor: string | null;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor: string | null;
}

export declare interface PullRequest {

}

export declare interface CommitComment {

}


export declare interface PullRequestReview {

}

export declare interface PullRequestReviewComment {

}

export declare interface Fork {
    comment: Comment[]
    createdAt: string;
    description: string;
    files: File[];
    forks: Fork[];
    id: number;
    isFork: boolean;
    isPublic: boolean;
    name: string;
    owner: Owner;
    pushedAt: string;
    resourcePath: string;
    stargazerCount: number;
    stargazers: Stargazers;
    updatedAt: string;
    url: string;
    viewerHasStarred: boolean;
}

export declare interface Forks {
    edges: [{
        cursor: string;
        node: Fork;
    }]
    nodes: Fork[];
    pageInfo: PageInfo;
    totalCount: number;
}

export declare interface Gist {
    comments: Comments;
    createdAt: string;
    description: string;
    files: File[];
    forks: Forks;
    id: number;
    isFork: boolean;
    isPublic: boolean;
    name: string;
    owner: Owner;
    pushedAt: string;
    resourcePath: string;
    stargazerCount: number;
    stargazers: Stargazers;
    updatedAt: string;
    url: string;
    viewerHasStarred: boolean;
}

export declare interface GistComments {
    edges: [{
        cursor: string;
        node: Comment;
    }]
    nodes: Comment[];
    pageInfo: PageInfo;
    totalCount: number;
}

export declare interface Stargazers {
    edges: [{
        cursor: string;
        node: UserInfo;
    }]
    nodes: UserInfo[];
    pageInfo: PageInfo;
    totalCount: number;
}
export declare interface Release {

}
export declare interface Version {
    files: File[];
    id: number;
    package: Package;
    platform: string;
    preRelease: boolean;
    readme: string;
    release: Release;
    statistics: {
        downloadsTotalCount: number;
    }
    summary: string;
    version: string;
}

export declare interface Package {
    id: number;
    latestVersion: Version;
    name: string;
    packageType: string;
    repository: Repository
    statistics: {
        downloadsTotalCount: number;
    };
    version: Version;
    versions: {
        edges: [{
            node: Version
        }]
        nodes: Version[]
        pageInfo: PageInfo;
        totalCount: number;
    }
}

export declare interface Project {
    body: string;
    bodyHTML: string;
    closed: boolean;
    closedAt: string;
    columns: Columns;
    createdAt: string;
    creator: Owner;
    databaseId: number;
    id: number;
    name: string;
    number: number;
    owner: Owner;
    pendingCards: Cards;
    progress: {
        doneCount: number;
        donePercentage: number;
        enabled: boolean;
        inProgressCount: number;
        inProgressPercentage: number;
        todoCount: number;
        todoPercentage: number;
    }
    resourcePath: string;
    state: string;
    updatedAt: string;
    url: string;
    viewerCanUpdate: boolean;
}

export declare interface Reply {
    body: string;
    bodyHTML: string;
    databaseId: number;
    id: number;
    title: string;
    user: Owner
}

export declare interface Goal {
    description: string;
    kind: string;
    percentComplete: number;
    targetValue: number;
    title: string;
}

export declare interface Tier {
    adminInfo: {
        sponsorShips: {
            edges: [{
                cursor: string;
                node: SponsorShip;
            }]
            nodes: SponsorShip[];
            pageInfo: PageInfo;
        };

    }
    createdAt: string;
    description: string;
    descriptionHTML: string;
    id: number;
    monthlyPriceInCents: number;
    monthlyPriceInDollars: number;
    name: number;
    sponsorsListing: SponsorsListing;
    updatedAt: string;
}

export declare interface Sponsor {
    organization: Organization;
    user: User;
}
export declare interface SponsorShip {
    createdAt: string;
    id: number;
    maintainer: User;
    privacyLevel: string;
    sponsor: User
    sponsorEntity: Sponsor
    sponsorable: {
        hasSponsorsListing: boolean;
        isSponsoredBy: string;
        isSponsoringViewer: boolean;
        sponsorsListing: SponsorsListing;
        sponsorshipForViewerAsSponsor: SponsorShip;
        sponsorshipsAsMaintainer: {
            edges: [{
                cursor: string;
                node: SponsorShip;
            }];
            nodes: SponsorShip[];
            pageInfo: PageInfo;
            totalCount: number;
        }
        sponsorshipsAsSponsor: {
            edges: [{
                cursor: string;
                node: SponsorShip;
            }];
            nodes: SponsorShip[];
            pageInfo: PageInfo;
            totalCount: number;
        }
        viewerCanSponsor: boolean;
        viewerIsSponsoring: boolean;
        organizatio: Organization;
        user: User;
    }
    tier: Tier
}

export declare interface SponsorsListing {
    activeGoal: Goal;
    createdAt: string;
    fullDescription: string;
    fullDescriptionHTML: string;
    id: number;
    name: string
    shortDescription: string;
    slug: string;
    tiers: {
        edges: [{
            cursor: string;
            node: Vulnerability
        }];
        nodes: Vulnerability[];
    }
    withdrawnAt: string;
}
export declare interface CWES {
    edges: [{
        cursor: string;
        node: [{
            cweId: string;
            description: string;
            id: string;
            name: string
        }]
    }]
    nodes: [{
        cweId: string;
        description: string;
        id: string;
        name: string
    }]
}

export declare interface Vulnerability {
    advisory: SecurityAdvisory;
    firstPatchedVersion: {
        identifier: string;
    }
}

export declare interface SecurityVulnerabilities {
    securityVulnerabilities: {
        edges: {
            cursor: string | null;
            node: [Vulnerability];
        }
        nodes: [Vulnerability];
        totalCount: number;
    }
}

export declare interface Advisory {
    cvss: {
        score: string;
        vectorString: string;
    }
    cwes: CWES;
    databaseId: string;
    description: string;
    ghsaId: string;
    id: string;
    identifiers: [{
        type: string;
        value: string;
    }]
    notificationsPermalink: string;
    origin: string;
    permalink: string;
    publishedAt: string;
    references: [{
        url: string;
    }]
    severity: string;
    summary: string;
    updatedAt: string;
    vulnerabilities: {
        edges: [{
            cursor: string;
            node: Vulnerability
        }];
        nodes: [Vulnerability];
        totalCount: number;
    }
    withdrawnAt: string;
}
export declare interface CWES {
    edges: [{
        cursor: string;
        node: {
            cweId: string;
            description: string;
            id: string;
            name: string
        }
    }]
    nodes: [{
        cweId: string;
        description: string;
        id: string;
        name: string
    }]
    totalCount: number;
}

export declare interface SecurityAdvisory {
    securityAdvisory: Advisory;
}
export declare interface Vulnerability {
    advisory: Advisory;
    firstPatchedVersion: {
        identifier: string;
    }
    package: {
        ecosystem: string;
        name: string;
    }
    severity: string;
    updatedAt: string;
    vulnerableVersionRange: string;
}

export declare interface SecurityAdvisories {
    securityAdvisories: {
        edges: [{
            cursor: string;
            node: Advisory
        }]
        nodes: Advisory[]
        totalCount: number;
    }
}

export declare interface Search {
    search: {
        edges: [{
            cursor: string;
            node: SearchType;
        }];
        nodes: SearchType[];
        codeCount: number;
        issueCount: number;
        repositoryCount: number;
        userCount: number;
        wikiCount: number;
    }
}

export declare interface SearchType extends App, Issue, MarketplaceListing, Organization, PullRequest, RepositoryInfo, UserInfo{

}
export declare interface App {
    createdAt: string;
    databaseId: number;
    description: string;
    id: number;
    logoBackgroundColor: string;
    logoUrl: string;
    name: string;
    slug: string;
    updatedAt: string;
    url: string;
}
export declare interface MarketplaceListing {
    app: App;
    name: string;
    companyUrl: string;
    configurationResourcePath: string;
    configurationUrl: string;
    documentationUrl: string;
    extendedDescription: string;
    extendedDescriptionHTML: string;
    fullDescription: string;
    fullDescriptionHTML: string;
    hasPublishedFreeTrialPlans: boolean;
    hasTermsOfService: boolean;
    hasVerifiedOwner: boolean;
    howItWorks: string;
    howItWorksHTML: string;
    id: number;
    installationUrl: string;
    installedForViewer: boolean;
    isArchived: boolean;
    isDraft: boolean;
    isPaid: boolean;
    isPublic: boolean;
    isRejected: boolean;
    isUnverified: boolean;
    isUnverifiedPending: boolean;
    isVerificationPendingFromDraft: boolean;
    isVerificationPendingFromUnverified: boolean;
    isVerified: boolean;
    logoBackgroundColor: string;
    logoUrl: string;
    normalizedShortDescription: string;
    pricingUrl: string;
    primaryCategory: {
        description: string;
        howItWorksstring: string;
        id: number;
        name: string;
        primaryListingCount: number;
        resourcePath: string;
        secondaryListingCount: number;
        slug: string;
        url: string;
    }
    privacyPolicyUrl: string;
    resourcePath: string;
    screenshotUrls: string;
    secondaryCategory: {
        description: string;
        howItWorksstring: string;
        id: number;
        name: string;
        primaryListingCount: number;
        resourcePath: string;
        secondaryListingCount: number;
        slug: string;
        url: string;
    }
    shortDescription: string;
    slug: string;
    statusUrl: string;
    supportEmail: string;
    supportUrl: string;
    termsOfServiceUrl: string;
    url: string;
    viewerCanAddPlans: boolean;
    viewerCanApprove: boolean;
    viewerCanDelist: boolean;
    viewerCanEdit: boolean;
    viewerCanEditCategories: boolean;
    viewerCanEditPlans: boolean;
    viewerCanRedraft: boolean;
    viewerCanReject: boolean;
    viewerCanRequestApproval: boolean;
    viewerHasPurchased: boolean;
    viewerHasPurchasedForAllOrganizations: boolean;
    viewerIsListingAdmin: boolean;
}
