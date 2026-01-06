type Feature = {
  id: number;
  src: string;
  alt: string;
  heading: string;
  paragraph: string;
};

type SubFeaturesList ={
  id: number;
  subFeature: string;
}

export const features: Feature[] = [
  {
    id: 1,
    src: "/expense_tracking.svg",
    alt: "Expense Tracking",
    heading: "Expense Tracking",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Cupiditate,obcaecati nesciunt harum illum dolorum necessitatibus eaque ",
  },
  {
    id: 2,
    src: "/budget_planning.svg",
    alt: "Budget Planning",
    heading: "Budget Planning",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Cupiditate,obcaecati nesciunt harum illum dolorum necessitatibus eaque ",
  },
  {
    id: 3,
    src: "/data_visualization.svg",
    alt: "Data Visualization",
    heading: "Data Visualization",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Cupiditate,obcaecati nesciunt harum illum dolorum necessitatibus eaque ",
  },
  {
    id: 4,
    src: "/financial_goal.svg",
    alt: "Financial Goal",
    heading: "Financial Goal",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Cupiditate,obcaecati nesciunt harum illum dolorum necessitatibus eaque ",
  },
  {
    id: 5,
    src: "/service_24_7.svg",
    alt: "24/7 Service",
    heading: "24/7 Service",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Cupiditate,obcaecati nesciunt harum illum dolorum necessitatibus eaque ",
  },
  {
    id: 6,
    src: "/smart_insights.svg",
    alt: "Smart Insights",
    heading: "Smart Insights",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Cupiditate,obcaecati nesciunt harum illum dolorum necessitatibus eaque ",
  },
];

export const subFeaturesList:SubFeaturesList[] =[
  {
    id: 1,
    subFeature:"Unlimited transaction Tracking"
  },
  {
    id: 2,
    subFeature:"Smart budget management"
  },
  {
    id: 3,
    subFeature:"Real-time analytics and insights"
  },
  {
    id: 4,
    subFeature:"Multi device sync"
  },
  {
    id: 5,
    subFeature:"Secure data encryption"
  },
  {
    id: 6,
    subFeature:"Export to CSV/PDF"
  }
]
