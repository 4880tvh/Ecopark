
import './BikeCategory.css'
import { useState, useEffect } from 'react'
import backpage from '../../../../shared/icons/Vector.png'
import nextpage from '../../../../shared/icons/nextpage.png'
import Button from '@mui/material/Button';
import Bike2 from '../../../../shared/images/Rectangle 38.png'
import axios from 'axios'

const Example = {
    Image: Bike2,
    Model: "#X23 45",
    Amount: 24,
    Price: 100000,
    DebutTime: "12/12/2021",
    Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis fermentum neque. Donec  Curabitur lobortis suscipit purus, non semper neque lacinia nec. Ut sed magna viverra, aliquet ex et, consequa massa..."
}

export default function Category({ loading }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [categories, setCategories] = useState([])
    const [detailCategory, setDetailCategory] = useState([]);
    const [isLoading, setLoading] = useState(true)
    const [pages, setPages] = useState([]);
    async function getCategory() {
        let url = `https://localhost:5000/api/v2/category`;
        let token = localStorage.getItem("token");
        axios.get(url, { headers: { "Authorization": `Bearer ${token}` } }).then(doc => { setCategories(doc.data.data); console.log(doc.data.data); })
    }
    useEffect(() => {
        getCategory()
        // getDetailData();
        setLoading(true)
    }, [loading])

    const setupPages = (length) => {
        if (length / 4 > 2) setPages([1, 2, 3]);
        if (length / 4 <= 2 && length / 4 > 1) setPages([1, 2]);
        if (length / 4 <= 1) setPages([1]);
    }
    return (
        <div className="Tung_VH_Category">
            <ListCategories NumberOfCategory="4"></ListCategories>
            <div className="Tung_VH_CategoryRight">
                <OrderBy></OrderBy>
                <DetailsOfCate
                    Image={Example.Image}
                    Model={Example.Model}
                    Amount={Example.Amount}
                    Price={Example.Price}
                    DebutTime={Example.DebutTime}
                    Description={Example.Description}
                >

                </DetailsOfCate>
                <ButtunFunctionOfAdmin></ButtunFunctionOfAdmin>
            </div>
        </div>
    )
    function ListCategories(props) {
        const NumberOfCategory = props.NumberOfCategory
        return (
            <div className="Tung_VH_ListCategories">
                <span className="Tung_VH_TTListCate">Categories</span>
                <p className="Tung_VH_TTListCatee">Showing 1-4 from <span> {NumberOfCategory} </span> data</p>
                {categories.map((category, index) => {
                    return (
                        <OneOfCategories
                            key={index}
                            id={category._id}
                            Model={category.name}
                            Image={category.image}

                        >
                        </OneOfCategories>
                    )
                })}
                <Pagination></Pagination>
            </div>
        )
    }


    function OneOfCategories(props) {
        const Model = props.Model
        const Image = props.Image
        const id = props.id;
        return (
            <div className="Tung_VH_OneOfCategories" onClick={() => {
                console.log(id)
                getDetailData(id);

                // DetailsOfCate(detailCategory)
            }}>
                <div className="Tung_VH_ImgCateBike">
                    <img className="Tung_VH_ImgCateBikee" src={Image} alt="" />
                </div>
                <div className="Tung_VH_ModelAndAmount">
                    <p className="Tung_VH_Model"> Model: <span> {Model}</span></p>
                </div>
            </div>
        )
    }
    async function getDetailData(id) {
        let url = `https://nmcnpm.herokuapp.com/api/v3/staff/category/detail/${id}`;
        let token = localStorage.getItem("token");
        axios.get(url, { headers: { "Authorization": `Bearer ${token}` } }).then(doc => {
            setDetailCategory(doc.data.data);
            console.log(doc.data.data);
            console.log(detailCategory.name);
        })
    }
    function Pagination(props) {
        const [screen, setScreen] = useState([true, false, false])
        function changeScreen1(value) {
            var list = []
            for (var i = 0; i < 3; i++) {
                if (i === value)
                    list.push(true)
                else
                    list.push(false)
            }
            setScreen(list)
        }
        return (
            <div className="Tung_VH_PaginationOfCate">
                <button className="Tung_VH_backPageOfCate">
                    <img id="Tung_VH_backPageiOfCate" src={backpage} alt="" />
                </button>
                <ChangePageButton
                    pageNumber="1"
                    isSlted={screen[0]}
                    onPress={() => { changeScreen1(0) }}
                >
                </ChangePageButton>
                <ChangePageButton
                    pageNumber="2"
                    isSlted={screen[1]}
                    onPress={() => { changeScreen1(1) }}
                >
                </ChangePageButton>
                <ChangePageButton
                    pageNumber="3"
                    isSlted={screen[2]}
                    onPress={() => { changeScreen1(2) }}
                >
                </ChangePageButton>
                <button className="Tung_VH_nextPageOfCate">
                    <img id="Tung_VH_nextPageiOfCate" src={nextpage} alt="" />
                </button>
            </div>
        )
    }
    function DetailsOfCate(props) {
        const image = props.image
        const model = props.model
        const price = props.price
        const description = props.description
        return (
            <div className="Tung_VH_DetailsOfCate">
                <div className="Tung_VH_ImgOfThisCate">
                    <img className="Tung_VH_ImgOfThisCatee" src={image} alt="" />
                </div>
                <div className="Tung_VH_CateInfor">
                    <div className="Tung_VH_ModelAndPriceOfDetail">
                        <span>Model: {model}</span>
                        <span>Giá cho thuê: {price}</span>
                    </div>
                    <div className="Tung_VH_AmountAndDebutTimeOfDetail">
                        <span>Số Lượng: </span>
                    </div>
                </div>
                <div className="Tung_VH_Description">
                    <div>Mô tả: <p>{description}</p></div>
                </div>
            </div>
        )
    }
    function ChangePageButton(props) {
        let pageNumber = props.pageNumber
        const onPress = props.onPress
        const [isSlted, setIsSlted] = useState(props.isSlted)
        function changeSelected() {
            setIsSlted(!isSlted)
        }
        useEffect(() => {
            setIsSlted(props.isSlted)
        }, [props])
        return (
            <button className={(isSlted) ? "Tung_VH_onPageOfCate" : "Tung_VH_outPageOfCate"} onClick={() => {
                props.onPress()
                changeSelected()
            }}>
                <span className={(isSlted) ? "Tung_VH_nbrOfOnPageOfCate" : "Tung_VH_nbrOfOutPageOfCate"}>{pageNumber}</span>
            </button>
        )
    }
    function OrderBy() {
        return (
            <div className="OrderBy">
                <span className="Tung_VH_SapXepTheott">Sort by:</span>
                <select className="Tung_VH_SapXepTheo">
                    <option>Doanh thu cao - thấp</option>
                    <option>Doanh thu thấp - cao</option>
                    <option>Giá cao - thấp</option>
                    <option>Giá thấp - cao</option>
                </select>
            </div>
        )
    }

    function ButtunFunctionOfAdmin() {
        return (
            <div className="Tung_VH_ButtunFunctionOfAdmin">
                <Button variant="contained" className="Tung_VH_ButtunFunctionOfAdminEdit">Sửa</Button>
                <Button variant="contained" className="Tung_VH_ButtunFunctionOfAdminDelete">Xóa</Button>
            </div>
        )
    }
}