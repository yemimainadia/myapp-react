import React, { Component } from 'react';
import EditBtnImage from '../body/edit-btn.png';
import { connect } from 'react-redux';
import { fetchRecipe, deleteRecipe } from '../../redux/actions';

class Body extends Component {

    componentDidMount() {
        this.props.fetchRecipe();
    }

    remove = (recipeID) => {
        this.props.deleteRecipe(recipeID);
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
                                            <button style={ButtonEditStyle} type="button" >
                                                <img style={ImageEditStyle} src={EditBtnImage} />
                                            </button>

                                        </div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" onClick={() => this.remove(dataAPI._id)} className="btn-delete" data-recipeid={dataAPI._id}>Not Interested</button>
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
                <button type="button" className="addButton">Add New Recipe</button>

            </div>



        );
    }

}

const mapStateToProps = ({ data = {}, isLoadingData = true }) => ({
    data, isLoadingData
});
const mapDispatchToProps = (dispatch) => ({
    fetchRecipe: () => dispatch(fetchRecipe()),
    deleteRecipe: (idRecipe) => dispatch(deleteRecipe(idRecipe))
})
export default connect(mapStateToProps, mapDispatchToProps)(Body);
