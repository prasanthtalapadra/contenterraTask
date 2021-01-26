import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Dashboard.css";
import DisplayCards from "./DisplayCards";
import Header from "./Header";

const classname = 'leftOne';

function Dashboard() {
    const [headerTitle,setHeaderTitle] = useState()
    const [childData, setChildData] = useState();
    useEffect(async () => {
        const fetchedData = await axios(
            'https://www.reddit.com/r/reactjs.json',
        );
        if (childData == null) {
            setHeaderTitle(fetchedData.data.kind)
            setChildData(fetchedData.data.data.children)
        }
    });
   
      

    return (
        childData ? (
        <div className="dashboardContainer">
            <Header title={headerTitle} />
            {/* <div className="line"></div> */}
            {childData ?
              <div className="row">
                    {childData.map((ele, ind) => {
                        return (
                            <DisplayCards key={ind} classname={classname ?  'rightOne' : 'leftOne'} score={ele.data.score} url={ele.data.url} htmlString={ele.data.selftext_html}  heading={ele.data.title} />
                        )
                    })}
                </div>
                :
                <div>
                    Loading...
                </div>
            }
        </div>
        )
        :
        <div className="loading">
            Loading....
        </div>
    )

}

export default Dashboard;