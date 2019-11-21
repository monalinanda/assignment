import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Mainpage from "../Mainpage/Mainpage";
import {getData} from '../store/actions';

class index extends Component {


  state = {
    data: [],
  }

  componentDidMount() {
    this.props.getData();
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextProps', nextProps);

    this.setState({
      data: nextProps.data.data
    })
  }

    render() {
      const { data } = this.state;

        return (
            <div>
                <Header className="headerName" text="Facebook"/>
                {data && data.map(i => {
                    return <Mainpage key={i.id} title={i.title} image={i.url} />
                })}     
               <Footer/>
                
            </div>
        )
    }
}

function mapStateToProps(state) {
  return {
    data: state
  }
}

export default connect(mapStateToProps, {
  getData
})(index);
