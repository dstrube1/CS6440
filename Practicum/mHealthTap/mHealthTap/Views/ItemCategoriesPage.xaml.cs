using Xamarin.Forms;

using mHealthTap.ViewModels;

namespace mHealthTap.Views
{
    public partial class ItemCategoriesPage : ContentPage
    {
        ItemCategoriesViewModel _viewModel;

        public ItemCategoriesPage()
        {
            InitializeComponent();

            BindingContext = _viewModel = new ItemCategoriesViewModel();
        }

        protected override void OnAppearing()
        {
            base.OnAppearing();
            _viewModel.OnAppearing();
        }
    }
}
