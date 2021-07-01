import React from "react";

class Detail extends React.Component {
    
    componentDidMount() {
        const { location, history } = this.props;
        // user가 movie카드의 detail 링크를 클릭하지 않고, 직접 url창에 detail을 적어서 접속하면 location.state는 undefined가 되고, 홈으로 리다이렉트 시켜버림
        if (location.state === undefined) {
            history.push("/");
        }
    }
    
    render() {
        const { location } = this.props;
        if (location.state) {
            return <span>{location.state.title}</span>;
        } else {
            return null;
        }
    }
}

export default Detail;