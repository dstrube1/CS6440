using mHealthTap.Views;

using Xamarin.Forms;

namespace mHealthTap.ViewModels
{
    public class LoginViewModel : BaseViewModel
    {
        public Command LoginCommand { get; }
        public Command LogoutCommand { get; }

        public LoginViewModel()
        {
            LoginCommand = new Command(OnLoginClicked);
            LogoutCommand = new Command(OnLogoutClicked);
        }

        private async void OnLoginClicked(object obj)
        {
            // Prefixing with `//` switches to a different navigation stack instead of pushing to the active one
            //await Shell.Current.GoToAsync($"//{nameof(LoginPage)}");
            await Shell.Current.GoToAsync($"//{nameof(PatientPage)}");
        }

        private async void OnLogoutClicked(object obj)
        {
            // Prefixing with `//` switches to a different navigation stack instead of pushing to the active one
            await Shell.Current.GoToAsync($"//{nameof(LoginPage)}");
            //await Shell.Current.GoToAsync($"//{nameof(PatientPage)}");
            //App.SwitchNavigationStack(App.StackEnum.Login);
        }
    }
}
