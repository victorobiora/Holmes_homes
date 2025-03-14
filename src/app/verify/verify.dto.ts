import { verifyRoutes } from "@/utils/urls";


export const CompleteVerifcationList = [
    {
    taskName: 'Personal Details',
    completed: true,
    link: verifyRoutes.personalDetails,
    headingText: 'Enter Your Personal Details',
    subText: 'Lorem ipsum dolor sit amet consectetur. Fermentum elit ut dui velit.'
},
    {
    taskName: 'Business Details',
    completed: true,
    link: verifyRoutes.businessDetails,
        headingText: 'Business Details',
    subText: 'Lorem ipsum dolor sit amet consectetur. Fermentum elit ut dui velit.'
},
    {
    taskName: 'Identity Documents',
    completed: false,
    link: verifyRoutes.identityDocuments,
        headingText: 'Identity Documents',
    subText: 'Lorem ipsum dolor sit amet consectetur. Fermentum elit ut dui velit.'
},
    {
    taskName: 'Face Verification',
    completed: false,
    link: verifyRoutes.faceVerification,
        headingText: 'Face Verification',
    subText: 'Lorem ipsum dolor sit amet consectetur. Fermentum elit ut dui velit.'
},
]