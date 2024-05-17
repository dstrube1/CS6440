using System.Windows.Input;
using Xamarin.Essentials;
using Xamarin.Forms;

namespace mHealthTap.ViewModels
{
    public class PatientViewModel : BaseViewModel
    {
        public PatientViewModel()
        {
            Title = "Patient: John Doe";
            OpenWebCommand = new Command(async () => await Browser.OpenAsync("https://aka.ms/xamarin-quickstart"));
        }

        public ICommand OpenWebCommand { get; }
    }
}