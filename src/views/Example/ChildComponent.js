import React from 'react';

class ChildComponent extends React.Component {

    /* 
    Props
    */
    //re-render
    state = {
        showJob: false
    }

    handleShowHide = () => {
        this.setState({
            showJob: !this.state.showJob
        });
    }

    handeleDeleteJob = (job) => {
        console.log('>>>handleDelete: ', job);
        this.props.deleteJob(job);
    }
    render() {
        // console.log('>>check props:', this.props);
        let { showJob } = this.state;
        let check = showJob === true ? 'showJob = true' : 'showJob = false';
        console.log('>>> check conditional: ', check)
        //let name = this.props.name;
        //key: value
        let { arrJobs } = this.props;
        return (
            <>
                {showJob === false &&
                    <div>
                        <button onClick={() => this.handleShowHide()}>Show</button>
                    </div>}
                {showJob === true &&
                    <>
                        <div className='job-list'>
                            {
                                arrJobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary} <></> <span onClick={() => this.handeleDeleteJob(item)}>x</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div><button onClick={() => this.handleShowHide()}> Hide</button></div>
                    </>
                }
            </>
        )
    }
}

// const ChildComponent = (props) => {
//     console.log('>>> check child props', props)
//     let { name, age, address, arrJobs } = props;

//     return (
//         <>
//             <div className='job-list'>
//                 {
//                     arrJobs.map((item, index) => {
//                         if (item.salary >= 1000) {
//                             return (
//                                 <div key={item.id}>
//                                     {item.tittle} - {item.salary} $
//                                 </div>
//                             )
//                         }
//                     })
//                 }
//             </div>
//             <div>
//                 ChildComponent: {name} - {age} - {address}
//             </div>
//         </>
//     )
// }
export default ChildComponent;