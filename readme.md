# INIT
npx @react-native-community/cli@latest init ReactNative
npx @react-native-community/cli init ReactNative --version 0.75.4
npx @react-native-community/cli@18.0.0 init ReactNative --version 0.75.4
NOTE: 
Saat install cocoapods pilih No, alias install manual saja.

npx react-native doctor
npx react-native info


# Manual install cocoapods
- cd ios
- bundle install # you need to run this only once in your project.
- bundle exec pod install
- cd ..


# Run project
- npx react-native run-ios | OR
- Open via xcode demo.xcworkspace


# After add new package
- cd ios
- pod install


# Reset project
rm -rf node_modules
rm -rd ios/Pods
yarn install
bundle exec pod install --repo-update --clean-install --project-directory=./ios
yarn ios
