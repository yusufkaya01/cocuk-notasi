# Çocuk Notası

**Çocuk Notası** is a project that involves creating a web page and mobile apps for Android and iOS. Admins can upload and manage content, including free and paid content, which users can access via the web or mobile platforms. Payments are handled through **Shopier** for easy transactions. The app is built with **React Native** for cross-platform compatibility and integrates with **AWS Amplify** for backend services.

## Features
- **Web and Mobile Platforms**: Developed using **React Native** for Android and iOS compatibility.
- **Admin Content Management**: Admins can upload and manage photos, text, and other content.
- **Paid Content**: Users can purchase access to premium content via **Shopier** payment integration.
- **Cross-Platform Compatibility**: Single codebase for both Android and iOS apps.
- **Push Notifications**: Real-time notifications for new content using **Firebase Cloud Messaging (FCM)**.
- **Seamless Backend Integration**: Backend services powered by **AWS Amplify API** (GraphQL/REST).
- **Storage**: Content and media are stored and fetched from **AWS S3**.
- **State Management**: App-wide state managed with **Redux** or **Context API**.
- **Navigation**: Efficient navigation managed with **React Navigation**.

## Tech Stack
| **Component**           | **Tool/Framework**               | **Why?**                                      |
|-------------------------|-----------------------------------|-----------------------------------------------|
| **Framework**           | React Native                     | Single codebase for Android & iOS apps.       |
| **UI Components**       | React Native Paper, NativeBase    | Pre-built UI components for consistency.      |
| **Navigation**          | React Navigation                 | Manage screens and navigation.                |
| **State Management**    | Redux or Context API             | Manage app-wide state like user data.         |
| **Backend Integration** | AWS Amplify API (GraphQL/REST)   | Seamless backend communication.               |
| **Push Notifications**  | Firebase Cloud Messaging (FCM)    | Cross-platform push notification service.     |
| **Payments**            | Stripe SDK or Shopier API        | Secure payment processing.                    |
| **Storage**             | AWS S3                            | Store and fetch media content.                |
| **Deployment**          | Expo or Fastlane                 | Simplifies building and deploying apps.       |

## Setup

### Prerequisites
- Install **Node.js** and **npm** (or **Yarn**).
- Install **React Native CLI** (or use **Expo** for easier development).
- Set up **AWS Amplify** for backend services.
- Set up **Firebase Cloud Messaging** for push notifications.
- Set up **Shopier** account for payment processing.

### Installation

1. Clone this repository:
   git clone https://github.com/your-username/cocuk-notasi.git

2. Navigate to the project directory:
   cd cocuk-notasi

3. Install dependencies:
   npm install

4. Run the application:
   npm start

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or features you'd like to add.

## License
This project is licensed under the MIT License. See the LICENSE file for details.