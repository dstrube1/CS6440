using Xamarin.Essentials;
using Xamarin.Forms;

using mHealthTap.Services;
using mHealthTap.Views;

namespace mHealthTap
{
    public partial class App : Application
    {
        //TODO: Replace with *.azurewebsites.net url after deploying backend to Azure
        //To debug on Android emulators run the web backend against .NET Core not IIS
        //If using other emulators besides stock Google images you may need to adjust the IP address
        public static string AzureBackendUrl =
            DeviceInfo.Platform == DevicePlatform.Android ? "http://10.0.2.2:5000" : "http://localhost:5000";
        public static bool UseMockDataStore = true;

        public App()
        {
            InitializeComponent();

            if (UseMockDataStore)
                DependencyService.Register<MockDataStore>();
            else
                DependencyService.Register<AzureDataStore>();
            MainPage = new AppShell();
        }

        protected override void OnStart()
        {
        }

        protected override void OnSleep()
        {
        }

        protected override void OnResume()
        {
        }

        #region logout?
        //from https://www.xamarinhelp.com/login-design-pattern/
        public enum StackEnum
        {
            Login, Main
        }

        public static void SwitchNavigationStack(StackEnum stack)
        {
            switch (stack)
            {
                case StackEnum.Login:
                    Current.MainPage = GetLoginStack();
                    break;
                case StackEnum.Main:
                default:
                    Current.MainPage = GetMainStack();
                    break;
            }
        }

        private static Page GetMainStack()
        {
            return new NavigationPage(new PatientPage());
        }

        private static Page GetLoginStack()
        {
            return new NavigationPage(new LoginPage());
        }

        #endregion //logout?
    }
}
