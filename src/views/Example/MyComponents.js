import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';

class MyComponents extends React.Component {

    /* 
    JSX => return block(1 div)
    flagment
    */
    state = {
        arrJobs: [
            {
                id: 'Jobs1',
                title: 'Developer',
                salary: 900
            },
            {
                id: 'Jobs2',
                title: 'Designer',
                salary: 1200
            },
            {
                id: 'Jobs3',
                title: 'Manager',
                salary: 2000
            }
        ]
    }

    addNewJob = (job) => {
        console.log('>>>check job from parent: ', job)
        let currentJobs = this.state.arrJobs;
        currentJobs.push(job);
        this.setState({
            // arrJobs: [...this.state.arrJobs, job]
            arrJobs: currentJobs
        })
    }

    deleteJob = (job) => {
        let currentJob = this.state.arrJobs;
        currentJob = currentJob.filter(item => item.id != job.id)
        this.setState({
            arrJobs: currentJob
        })
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('>>> run didUpdate: ', 'prev state', prevState, ' current state: ', this.state)
    }

    componentDidMount() {
        console.log('>>> run component did mount')
    }
    //re-render
    render() {
        console.log('>>call render:', this.state);
        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob}
                />
                <ChildComponent
                    arrJobs={this.state.arrJobs}
                    deleteJob={this.deleteJob}
                />

            </>
        )
    }
}

export default MyComponents;