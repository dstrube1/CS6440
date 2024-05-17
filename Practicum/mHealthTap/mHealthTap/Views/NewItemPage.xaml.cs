using Xamarin.Forms;

using mHealthTap.Models;
using mHealthTap.ViewModels;

namespace mHealthTap.Views
{
    public partial class NewItemPage : ContentPage
    {
        public Item Item { get; set; }

        public NewItemPage()
        {
            InitializeComponent();
            BindingContext = new NewItemViewModel();
        }
    }
}