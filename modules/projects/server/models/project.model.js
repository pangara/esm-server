'use strict';
// =========================================================================
//
// Model for Project
//
// =========================================================================
module.exports = require ('../../../core/server/controllers/core.models.controller')
.generateModel ('Project', {
	__audit               : true,
	__access              : true,
	__tracking            : true,
	__status              : ['Initiated', 'Submitted', 'In Progress', 'Certified', 'Decommissioned'],
	__codename            : 'unique',
	epicProjectID		  : { type:Number, default: 0, index:true},  // Used to relate ePIC imports
	shortName             : { type:String, default: '' },
	phases                : [ {type: 'ObjectId', ref:'Phase'} ],
	type                  : { type:String, default:'', index:true },
	sector                : { type:String, default:'' },
	region                : { type:String, default:'' },     // object id
	locSpatial            : { type:String, default:'' }, // incoming ePIC
	location              : { type:String, default:'' },
	provElecDist 		  : { type:String, default:'' },
	fedElecDist 		  : { type:String, default:'' },
	stream                : { type:'ObjectId', ref:'Stream'     , index:true, default:null },
	proponent             : { type:'ObjectId', ref:'Organization'     , index:true, default:null },
	primaryContact        : { type:'ObjectId', ref:'User', default:null },
	adminRole             : { type:String, default: '' },
	proponentAdminRole    : { type:String, default: '' },
	sectorRole            : { type:String, default: '' },
	orgCode               : { type:String, default: '' },
	substitution : { type:Boolean, default:false },
	intake: {
		affectedFirstNations  : { type:String, default:'' },
		constructionjobs      : { type:String, default:'' },
		constructionjobsNotes : { type:String, default:'' },
		contactedCEAA         : { type:String, default:'' },
		contactedFirstNations : { type:String, default:'' },
		investment            : { type:String, default:'' },
		investmentNotes       : { type:String, default:'' },
		lifespan              : { type:String, default:'' },
		meetsCEAACriteria     : { type:String, default:'' },
		meetsrprcriteria      : { type:String, default:'' },
		operatingjobs         : { type:String, default:'' },
		operatingjobsNotes    : { type:String, default:'' },
		section7optin         : { type:String, default:'' }
	},
	isTermsAgreed: {type:Boolean, default:false},
	build: { type:String, default:'' },
	//
	// location is a free form string entry
	//
	//
	// phase data is stored below, so these are merely keys into that data
	//
	currentPhase                 : { type:'ObjectId', ref:'Phase', index:true },
	nextPhase                    : { type:'ObjectId', ref:'Phase', index:true },
	currentPhaseCode             : { type: String, default:'' },
	dateCurrentPhaseEstimatedEnd : { type: Date, default: Date.now },
	nextPhaseCode                : { type: String, default:'' },
	dateNextPhaseEstimatedStart  : { type: Date, default: Date.now },
	overallProgress              : { type: Number, default:0 },
	lat                          : { type: Number, default:0 },
	lon                          : { type: Number, default:0 },
	dateCommentsOpen             : { type: Date, default: null },
	dateCommentsClosed           : { type: Date, default: null },

	// OLD DATA
	responsibleEPD          : { type: String, default: '' },
	projectLead           	: { type: String, default: '' },
	EAOCAARTRepresentative  : { type: String, default: '' },
	projectOfficer          : { type: String, default: '' },
	projectAnalyst          : { type: String, default: '' },
	projectAssistant        : { type: String, default: '' },
	administrativeAssistant : { type: String, default: '' },
	CELead           		: { type: String, default: '' },
	teamNotes           	: { type: String, default: '' },

	// Migrated epic data wanting to be made available
	eaActive 					: { type: String, default: '' },
	eaIssues 					: { type: String, default: '' },
	eaNotes 					: { type: String, default: '' },
	CEAAInvolvement 			: { type: String, default: '' },
	projectNotes 				: { type: String, default: '' }, // Formal notes about the project

	// MEM data
	ownership				: { type: String, default: '' },
	memPermitID				: { type:String, default: '', index:true},  // Used to relate mem permitID on import
	commodity				: { type: String, default: '' },
	tailingsImpoundments	: { type: String, default: '' }
});
