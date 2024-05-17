using Xamarin.Forms;
using mHealthTap.ViewModels;

namespace mHealthTap.Views
{
    public partial class ItemDetailPage : ContentPage
    {
        public ItemDetailPage()
        {
            InitializeComponent();
            BindingContext = new ItemDetailViewModel();
        }
    }
}