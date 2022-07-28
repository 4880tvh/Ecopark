import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { updateCategory } from "../../Store/ListCategoryStore";
export default function EditCategory({ setEdit, setNeedLoading, needLoading, currentCategory }) {
    const [category, setCategory]= useState({
        name:currentCategory.name,
        cost:currentCategory.cost,
        image:currentCategory.image,
        description:currentCategory.description
    })

    const handleChange = (event) => {
        const {name,value}= event.target;
        setCategory({...category,[name]:value})
        return 0;
    }

    const handleSubmit = async()=>{
        const result = await updateCategory(currentCategory._id,category);
        if(result!=="Failed to update"){
            alert(result.msg)
            setNeedLoading(needLoading+1);
            setEdit(false)
        }else{
            alert(result);
        }
    }

    return (
        <div className='504_AddCategory'>
            <h6 className='504_TitleOfAddCateScr' >Chỉnh sửa thông tin xe đạp</h6>
            <div className='504_AddInforOfCate'>
                
                <TextField sx={{
                    width: "20%",
                    marginLeft: "3%",
                    borderRadius: "30px"
                }}
                    label="Model"
                    name="name"
                    fullWidth
                    value={category.name}
                    margin="dense"
                    variant="outlined"
                    onChange={handleChange}
                />
            </div>
            <div className='504_AddInforOfCate'>
                <TextField sx={{
                    width: "20%",
                    marginLeft: "3%"
                }}
                    label="Giá thuê một giờ"
                    name="cost"
                    fullWidth
                    type="number"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    value={category.cost}
                    margin="dense"
                    variant="outlined"
                    onChange={handleChange}
                />
            </div>
            <div className='504_AddInforOfCate'>
                <TextField sx={{
                    width: "80%",
                    marginLeft: "3%"
                }}
                    label="Link ảnh "
                    name="image"
                    fullWidth
                    value={category.image}
                    margin="dense"
                    variant="outlined"
                    onChange={handleChange}
                />
            </div>
            <div style={{
                display: "flex",
                fontFamily: "Inter",
                flexDirection: "row",
                height: "8%",
                width: "90%",
                fontWeight: "600",
                marginTop: "4%",
                marginLeft: "3%",
            }}>
                <TextField sx={{
                    width: "90%",
                    marginTop: "-1%",
                    marginLeft: "3%",
                }}
                    label="Mô tả chi tiết sản phẩm"
                    name="description"
                    fullWidth
                    value={category.description}
                    margin="dense"
                    variant="outlined"
                    onChange={handleChange}
                    multiline
                    rows={4}
                />
            </div>
            <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
            <Button sx={{
                display: "flex",
                width: "20%",
                alignSelf: "center",
                marginTop: "15%",
                backgroundColor: "#7ac70c"
                }} 
                variant="contained"
                onClick={handleSubmit}
                >SAVE</Button>
            <Button sx={{
                display: "flex",
                width: "20%",
                marginTop: "15%",
                alignSelf: "center",
                backgroundColor: "red"
            }} variant="contained" onClick={() => { setEdit(false) }}>CANCEL</Button>
        </div>
        </div>
    )
}
