import React, {useState} from "react";
import styled from "styled-components";
import DreamCanvas from "../../components/upload/DreamCanvas";
import ButtonBack from '../../assets/uploadpage/ButtonBack.svg';
import ButtonUpload from '../../assets/uploadpage/ButtonUpload.svg';
import Logo from '../../assets/uploadpage/Logo.svg';

const DetailForm = ({getUserData}) => {
    
    const [inputs, setInputs] = useState({
        dreamName: "",
        dreamKeyword: "",
        dreamPrice: "",
        dreamDescription: ""
    })

    const handleChange = (e) => {
        console.log(0);
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        getUserData(inputs);
        setInputs({
            dreamName: "",
            dreamKeyword: "",
            dreamPrice: "",
            dreamDescription: ""
        });
    };

    return (
        <DetailFormWrap>
            <div className="header">
                <div className="header__front">
                    <img className="header__front--back" src={ButtonBack} alt="" />
                    <img className="header__front--logo" src={Logo} alt="" />
                </div>
                <img className="header__back--upload" src={ButtonUpload} alt="" onClick={handleSubmit}/>
            </div>
            <div id="text">나의 길몽은</div>
            <div className="detail">
                <DreamCanvas />
                <div className="detail__info">
                    <form>
                        <input
                        className="detail__info--form"
                        id="first"
                        name="dreamName"
                        type="text"
                        value={inputs.dreamName}
                        onChange={handleChange}
                        placeholder="길몽 이름"
                        />
                    </form>
                    <form>
                        <input
                        className="detail__info--form" 
                        name="dreamKeyword"
                        type="text"
                        value={inputs.dreamKeyword}
                        onChange={handleChange}
                        placeholder="길몽 키워드"
                        />
                    </form>
                    <form>
                        <input
                        className="detail__info--form" 
                        name="dreamPrice"
                        type="number"
                        value={inputs.dreamPrice}
                        onChange={handleChange}
                        placeholder="경매 시작가"
                        />
                    </form>
                    <form>
                        <textarea
                        className="detail__info--form"
                        id="last"
                        name="dreamDescription"
                        type="text"
                        value={inputs.dreamDescription}
                        onChange={handleChange}
                        placeholder="길몽 내용"
                        />
                    </form>
                </div>
            </div>
        </DetailFormWrap>
    );
};

export default DetailForm;

const DetailFormWrap = styled.div`
    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-top: 0.1rem solid;
        border-bottom: 0.1rem solid;

        &__front {
            &--back {
                width: 5rem;
                height: 5rem;
            }

            &--logo {
                width: 16.116rem;
                height: 4.745rem;
            }
        }

        &__back {
            width: 18rem;
            height: 6.5rem;
        }
    }
    #text {
        font-size: 2.4rem;
        margin-top: 9rem;
        margin-bottom: 0.3rem;
    }

    .detail {
        width: 140.1rem;
        height: 57rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        /* margin-top: 9rem; */

        &__info {
            &--form {
                width: 33rem;
                height: 5rem;
                margin-top: 1.6rem;
                font-size: 2.4rem;
            }
            #first {
                margin-top: 0;
            }
            #last {
                height: 37rem;
            }
        }
    }
`;