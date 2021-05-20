import React, { Component } from 'react'
import { ScrollView, FlatList } from 'react-native'
import { Card, Text, ListItem } from 'react-native-elements'
import { connect } from 'react-redux'
import { baseUrl } from '../shared/baseUrl'
import Loading from './LoadingComponent' //Doesn't need closing brackets because its the default export

const mapStateToProps = (state) => {
  return {
    partners: state.partners,
  } //Receives state as a prop, then returns partners data from the state
}

function Mission() {
  return (
    <Card title='Our Mission'>
      <Text style={{ margin: 10 }}>
        We present a curated database of the best campsites in the vast woods
        and backcountry of the World Wide Web Wilderness. We increase access to
        adventure for the public while promoting safe and respectful use of
        resources. The expert wilderness trekkers on our staff personally verify
        each campsite to make sure that they are up to our standards. We also
        present a platform for campers to share reviews on campsites they have
        visited with each other.
      </Text>
    </Card>
  )
}

class About extends Component {
  static navigationOptions = {
    title: 'About Us',
  }

  render() {
    const RenderPartner = ({ item }) => {
      return (
        <ListItem
          title={item.name}
          subtitle={item.description}
          leftAvatar={{ source: { uri: baseUrl + item.image } }}
        />
      )
    }

    if (this.props.partners.isLoading) {
      return (
        <ScrollView>
          <Mission />
          <Card title='Community Partners'>
            <Loading />
          </Card>
        </ScrollView>
      )
    }
    if (this.props.partners.errMess) {
      return (
        <ScrollView>
          <Mission />
          <Card title='Community Partners'>
            <Text>{this.props.partners.errMess}</Text>
          </Card>
        </ScrollView>
      )
    }

    return (
      <ScrollView>
        <Mission />
        <Card title='Community Partners'>
          <FlatList
            data={this.props.partners.partners} // First partner refers to the entire part of the state that handles the partners data including the isLoading and Error message properties. -- The second partners actually refers to the partners data array
            keyExtractor={(item) => item.id.toString()}
            renderItem={RenderPartner}
          />
        </Card>
      </ScrollView>
    )
  }
}

export default connect(mapStateToProps)(About) //connect function ensures that the about component receives the partners props from the redux store
