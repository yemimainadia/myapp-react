import React, { Component } from 'react';
import EditBtnImage from '../body/edit-btn.png';
import { connect } from 'react-redux';
import { fetchRecipe, deleteRecipe, formSubmit, formSubscribe } from '../../redux/actions';

class Body extends Component {

    componentDidMount() {
        this.props.fetchRecipe();
    }

    remove = (recipeID) => {
        this.props.deleteRecipe(recipeID);
    }

    edit = (recipeID, recipeTitle) => {
        this.props.editRecipe(recipeID);
    }

    formSubmit = (form) => {
        form.preventDefault();
        const newTitle = form.target.newTitle.value;
        const recipeID = form.target.updatedRecipe.value;
        this.props.formSubmit(newTitle, recipeID);
    }

    formSubscribe = (form) => {
        form.preventDefault();
        const emailUser = form.target.emailUser.value;
        console.log(emailUser);
        this.props.formSubscribe(emailUser);
    }

    render() {
        let RecipeMain;
        const _this = this;
        if (this.props.isLoadingData) {
            RecipeMain = () => {
                return (
                    <div> Loading</div>
                )
            }
        } else {
            console.log(_this.props.data);
            const RecipeTitleStyle = {
                fontSize: '20px',
                fontFamily: '"Unica One", cursive',
                width: 'auto',
                display: 'inline-block'
            };
            const ImageEditStyle = {
                width: '18px',
                border: 'none'
            };
            const ButtonEditStyle = {
                border: 'none',
                background: 'none'
            };
            const BtnEditStyle = {
                width: 'auto',
                display: 'inline-block'
            };

            const btnDelete = {
                marginTop: '15px',
                marginLeft: '16px',
                background: 'orange',
                color: 'white',

            };

            const editName = {
                background: 'olive',
                color: 'white',

            };

            const btnSubscribe = {
                background: 'black',
                color: 'white',
                fontSize: '20px'
            };

            RecipeMain = () => {
                return (
                    <div className="row table-recipe">
                        {_this.props.data.map((dataAPI) => (
                            <div className="col-md-4" key={dataAPI._id}>
                                <div className="card mb-4 shadow-sm">
                                    <img src={dataAPI.recipe_poster_url} alt="" className="bd-placeholder-img card-img-top" />
                                    <div className="card-body">
                                        <p style={RecipeTitleStyle} className="card-text">{dataAPI.recipe_title}</p>
                                        <div style={BtnEditStyle} className="btn-edit">

                                            <form onSubmit={this.formSubmit.bind(this)}>
                                                <input type="text" name="newTitle" />
                                                <input type="hidden" value={dataAPI._id} name="updatedRecipe" />
                                                <button style={editName} type="submit">Edit Name</button>
                                            </form>


                                        </div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button style={btnDelete} type="button" onClick={() => this.remove(dataAPI._id)} className="btn-delete" data-recipeid={dataAPI._id}>Not Interested</button>
                                            </div>
                                            <small className="text-muted">{dataAPI.recipe_time}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )
            }
        }


        return (
            <div className="container">

                <RecipeMain />

                <form onSubmit={this.formSubscribe.bind(this)}>
                    <input type="text" name="emailUser" />
                    <button type="submit">Subscribe</button>
                </form>


            </div>



        );
    }

}

const mapStateToProps = ({ data = {}, isLoadingData = true }) => ({
    data, isLoadingData
});
const mapDispatchToProps = (dispatch) => ({
    fetchRecipe: () => dispatch(fetchRecipe()),
    deleteRecipe: (idRecipe) => dispatch(deleteRecipe(idRecipe)),
    formSubmit: (newTitle, recipeID) => dispatch(formSubmit(newTitle, recipeID)),
    formSubscribe: (emailUser) => dispatch(formSubscribe(emailUser))
})
export default connect(mapStateToProps, mapDispatchToProps)(Body);
