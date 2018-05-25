import React, { Component } from 'react';

export class MonthBox extends Component {
    constructor(props, context) {
        super(props, context)
  
        this.state = {
            value: this.props.value || 'N/A',
        }
  
        this._handleClick = this._handleClick.bind(this)
    }
  
    componentWillReceiveProps(nextProps){
        this.setState({
            value: nextProps.value || 'N/A',
        })
    }
  
    render() {
  
        return (
            <div className="box" onClick={this._handleClick}>
                <label>{this.state.value}</label>
                <img className="Infographic__edit-staying" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDkxIDkxIiBoZWlnaHQ9IjkxcHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA5MSA5MSIgd2lkdGg9IjkxcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnPjxnPjxnPjxnPjxwYXRoIGQ9Ik0zNS42NTgsODAuMDc4TDEyLjEzNCw1Ni41NTdMNjEuNjQ5LDcuMDQzYzQuMDMxLTQuMDM2LDEwLjU3OC00LjAzNiwxNC42MTEsMGw4LjkwOCw4LjkxMyAgICAgIGM0LjAzNyw0LjAzNCw0LjAzNywxMC41NzcsMCwxNC42MDlMMzUuNjU4LDgwLjA3OHoiIGZpbGw9IiNFMEYxRjgiLz48cGF0aCBkPSJNMzUuNjU4LDgyLjU5MmMtMC42NDMsMC0xLjI4Ni0wLjI0Ni0xLjc3Ni0wLjczNkwxMC4zNTcsNTguMzM0Yy0wLjQ3Mi0wLjQ3Mi0wLjczNi0xLjExMS0wLjczNi0xLjc3NyAgICAgIHMwLjI2NS0xLjMwNiwwLjczNi0xLjc3N0w1OS44NzMsNS4yNjZjMi40MjMtMi40MjYsNS42NDgtMy43NjIsOS4wODEtMy43NjJzNi42NTgsMS4zMzYsOS4wODQsMy43NjNsOC45MDgsOC45MTMgICAgICBjMi40MjcsMi40MjQsMy43NjQsNS42NSwzLjc2Myw5LjA4M2MwLDMuNDMxLTEuMzM3LDYuNjU2LTMuNzY1LDkuMDhsLTQ5LjUxLDQ5LjUxM0MzNi45NDQsODIuMzQ2LDM2LjMwMSw4Mi41OTIsMzUuNjU4LDgyLjU5MnogICAgICAgTTE1LjY4OCw1Ni41NTdsMTkuOTcxLDE5Ljk2OWw0Ny43MzQtNDcuNzM3YzEuNDc4LTEuNDc3LDIuMjkxLTMuNDM4LDIuMjkyLTUuNTI2YzAtMi4wODktMC44MTMtNC4wNTItMi4yOTEtNS41MjlsLTguOTEtOC45MTQgICAgICBjLTEuNDc2LTEuNDc3LTMuNDM5LTIuMjkxLTUuNTI5LTIuMjkxYy0yLjA4OSwwLTQuMDUyLDAuODEzLTUuNTI3LDIuMjlMMTUuNjg4LDU2LjU1N3oiIGZpbGw9IiM0NTRCNTMiLz48L2c+PHBhdGggZD0iTTc5LjkxMiwzOC4zNGMtMC42NDMsMC0xLjI4Ni0wLjI0Ni0xLjc3Ni0wLjczNkw1NC42MDcsMTQuMDgyYy0wLjk4MS0wLjk4MS0wLjk4MS0yLjU3MiwwLTMuNTUzICAgICBjMC45OC0wLjk4LDIuNTcyLTAuOTgxLDMuNTUzLDBsMjMuNTI4LDIzLjUyMmMwLjk4MSwwLjk4MSwwLjk4MSwyLjU3MiwwLDMuNTUzQzgxLjE5OCwzOC4wOTUsODAuNTU2LDM4LjM0LDc5LjkxMiwzOC4zNHoiIGZpbGw9IiM0NTRCNTMiLz48Zz48cG9seWdvbiBmaWxsPSIjOUFCRkRBIiBwb2ludHM9IjM1LjMzNiw3OS43NTkgMy41NDMsODguMzU0IDEyLjQxMSw1Ni44MzQgICAgICIvPjxwYXRoIGQ9Ik0zLjU0Myw5MC44NjdjLTAuNjYyLDAtMS4zMDgtMC4yNjMtMS43ODYtMC43NDZjLTAuNjM2LTAuNjQzLTAuODc3LTEuNTc3LTAuNjMzLTIuNDQ3bDguODY4LTMxLjUyMSAgICAgIGMwLjI0Mi0wLjg1OCwwLjkyMS0xLjUyNCwxLjc4NC0xLjc1YzAuODYzLTAuMjI1LDEuNzgxLDAuMDIzLDIuNDExLDAuNjUzbDIyLjkyNSwyMi45MjZjMC42MzQsMC42MzQsMC44ODMsMS41NTgsMC42NTEsMi40MjQgICAgICBzLTAuOTA2LDEuNTQ0LTEuNzcyLDEuNzc3TDQuMTk4LDkwLjc3OUMzLjk4Miw5MC44MzgsMy43NjIsOTAuODY3LDMuNTQzLDkwLjg2N3ogTTEzLjY2OCw2MS42NDVMNy4xNiw4NC43NzNsMjMuMzMtNi4zMDcgICAgICBMMTMuNjY4LDYxLjY0NXoiIGZpbGw9IiM0NTRCNTMiLz48L2c+PHBhdGggZD0iTTM1LjYsNTkuMTI5Yy0wLjY0MywwLTEuMjg2LTAuMjQ2LTEuNzc2LTAuNzM2Yy0wLjk4MS0wLjk4MS0wLjk4MS0yLjU3MiwwLTMuNTUzbDIyLjg4MS0yMi44ODMgICAgIGMwLjk4LTAuOTgxLDIuNTcyLTAuOTgxLDMuNTUzLDBjMC45ODEsMC45ODEsMC45ODEsMi41NzIsMCwzLjU1M0wzNy4zNzYsNTguMzkzQzM2Ljg4Niw1OC44ODMsMzYuMjQyLDU5LjEyOSwzNS42LDU5LjEyOXoiIGZpbGw9IiM0NTRCNTMiLz48L2c+PC9nPjwvZz48L3N2Zz4="/>
            </div>
        )
    }
  
    _handleClick(e) {
        this.props.onClick && this.props.onClick(e)
    }
  }
  