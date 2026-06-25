import {
  Apple,
  Bot,
  Bug,
  CloudCog,
  Code2,
  Coffee,
  Database,
  Layers,
  Palette,
  Server,
  ShoppingCart,
  Smartphone,
  BarChart3,
} from "lucide-react";

export const HIRE_DEVELOPER_CATEGORIES = [
  {
    title: "MOBILE DEVELOPMENT",
    roles: [
      {
        name: "Flutter Dev",
        href: "/hire-flutter",
        featured: true,
        Icon: Layers,
      },
      {
        name: "React Native Dev",
        href: "/react-native",
        featured: true,
        Icon: Smartphone,
      },
      {
        name: "iOS Developer",
        href: "/ios",
        featured: false,
        Icon: Apple,
      },
      {
        name: "Android Dev",
        href: "/mobile-app-development",
        featured: false,
        Icon: Code2,
      },
    ],
  },
  {
    title: "BACKEND & API",
    roles: [
      {
        name: "Node.js Dev",
        href: "/hire-node-js",
        featured: true,
        Icon: Server,
      },
      {
        name: "Python Dev",
        href: "/hire-python",
        featured: true,
        Icon: Code2,
      },
      {
        name: "Java Spring Boot",
        href: "/hire-spring-boot",
        featured: false,
        Icon: Coffee,
      },
      {
        name: "Laravel Dev",
        href: "/hire-laravel",
        featured: false,
        Icon: Database,
      },
    ],
  },
  {
    title: "AI, DATA & EMERGING TECH",
    roles: [
      {
        name: "LLM / AI Engineer",
        href: "/hire-llm",
        featured: true,
        Icon: Bot,
      },
      {
        name: "Power BI Dev",
        href: "/hire-power-bi",
        featured: false,
        Icon: BarChart3,
      },
      {
        name: "Golang Dev",
        href: "/hire-golang",
        featured: false,
        Icon: Code2,
      },
      {
        name: "Data Engineer",
        href: "/contact",
        featured: false,
        Icon: Database,
      },
    ],
  },
  {
    title: "E-COMMERCE & DEVOPS",
    roles: [
      {
        name: "Magento Dev",
        href: "/hire-magento",
        featured: false,
        Icon: ShoppingCart,
      },
      {
        name: "DevOps Engineer",
        href: "/contact",
        featured: false,
        Icon: CloudCog,
      },
      {
        name: "QA Engineer",
        href: "/contact",
        featured: false,
        Icon: Bug,
      },
      {
        name: "UI/UX Designer",
        href: "/contact",
        featured: false,
        Icon: Palette,
      },
    ],
  },
];
