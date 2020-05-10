import React from 'react';
import EditBtnImage from '../body/edit-btn.png';
const Body = () => {
    const RecipeTitleStyle = {
        fontSize: '22px',
        fontFamily: '"Unica One", cursive',
        width: '80%',
        display: 'inline-block'
    };
    const ImageEditStyle = {
        width: '20px',
        border: 'none'
    };
    const ButtonEditStyle = {
        border: 'none',
        background: 'none'
    };
    const BtnEditStyle = {
        width: '10%',
        display: 'inline-block'
    };
    return (
        <div className="container">
            <div className="row table-recipe">
                <div className="col-md-4">
                    <div className="card mb-4 shadow-sm">
                        <img src="https://www.thugkitchen.com/sites/default/files/styles/recipe_xl/public/recipes/Strawberry%20Rose%20Pancakes_Edited.jpg" alt="" className="bd-placeholder-img card-img-top" />
                        <div className="card-body">
                            <p style={RecipeTitleStyle} className="card-text">Strawberry Rose Pancake</p>
                            <div style={BtnEditStyle} className="btn-edit">
                                <button style={ButtonEditStyle} type="button" >
                                    <img style={ImageEditStyle} src={EditBtnImage} />
                                </button>

                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-sm btn-outline-secondary btn-view" data-recipeid="5ea67b39423f27520000b87c">View</button>
                                    <button type="button" className="btn-delete" data-recipeid="5ea67b39423f27520000b87c">Not Interested</button>
                                </div>
                                <small className="text-muted">1 hour</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card mb-4 shadow-sm">
                        <img src="https://www.thugkitchen.com/sites/default/files/styles/recipe_xl/public/recipes/Clean%20Out%20The%20Fridge%20Pasta_Edited.jpg" alt="" className="bd-placeholder-img card-img-top" />
                        <div className="card-body">
                            <p className="card-text">Pasta La Vista</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-sm btn-outline-secondary btn-view" data-recipeid="5ea67b39423f27520000b87d">View</button>
                                    <button type="button" className="btn-delete" data-recipeid="5ea67b39423f27520000b87d">Not Interested</button>
                                </div>
                                <small className="text-muted">20 min</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card mb-4 shadow-sm">
                        <img src="https://www.thugkitchen.com/sites/default/files/styles/recipe_xl/public/recipes/creamy_herb_dressing-edit_site_0.jpg" alt="" className="bd-placeholder-img card-img-top" />
                        <div className="card-body">
                            <p className="card-text">Creamy Herb Salad</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-sm btn-outline-secondary btn-view" data-recipeid="5ea67b39423f27520000b87e">View</button>
                                    <button type="button" className="btn-delete" data-recipeid="5ea67b39423f27520000b87e">Not Interested</button>
                                </div>
                                <small className="text-muted">5 min</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Body;
