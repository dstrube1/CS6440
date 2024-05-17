using mHealthTap.ViewModels;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace mHealthTap.Views
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class LoginPage : ContentPage
    {
        private static bool isLoggedIn = false;

        public LoginPage()
        {
            InitializeComponent();
            this.BindingContext = new LoginViewModel();
            if (isLoggedIn)
            {
                //https://www.xamarinhelp.com/login-design-pattern/
                //https://forums.xamarin.com/discussion/44503/login-logout-app

                //infinite loop:
                //App.SwitchNavigationStack(App.StackEnum.Login);
                //not executable:
                //((LoginViewModel)BindingContext).LogoutCommand;
                //blank screen:
                //App.Current.MainPage = this;
                //isLoggedIn = false;
            }
            else
            {
                //isLoggedIn = true;
            }
            
        }

        
    }
}