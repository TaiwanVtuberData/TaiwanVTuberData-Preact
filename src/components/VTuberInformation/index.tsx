import { Fragment, FunctionalComponent, h } from 'preact';
import { Text } from 'preact-i18n';
import { Activity } from '../../types/Common/Activity';
import { CountType } from '../../types/Common/CountType';
import { VTuberDisplayFullData } from '../../types/TableDisplayData/VTuberDisplayFullData';
import { TwitchIdToLink, YouTubeIdToLink } from '../../utils/ChannelIdUtils';
import { GetRoute } from '../../utils/TypeSafeRouting';
import ProfileImage from '../ProfileImage';
import CountFragment from '../CountFragment';
import style from './style.module.css';
import ShowVideoButton from '../ShowVideoButton';

export interface VTuberInformationProps {
  VTuber: VTuberDisplayFullData;
}

const VTuberInformation: FunctionalComponent<VTuberInformationProps> = (
  props: VTuberInformationProps
): h.JSX.Element => {
  const vtuber: VTuberDisplayFullData = props.VTuber;

  const CountSpan = (countType: CountType): JSX.Element => {
    return (
      <span>
        <CountFragment countType={countType} />
      </span>
    );
  };

  const getActivityTranslation = (activity?: Activity): JSX.Element => {
    switch (activity) {
      case 'preparing':
        return <Text id="activityText.preparing">Preparing</Text>;
      case 'active':
        return <Text id="activityText.active">Active</Text>;
      case 'graduate':
        return <Text id="activityText.graduated">Graduated</Text>;
    }

    return <></>;
  };

  const getYouTubeLink = (id?: string): JSX.Element => {
    return (
      <a href={YouTubeIdToLink(id)} target="_blank" rel="noopener noreferrer">
        <Text id="text.link">Link</Text>
      </a>
    );
  };

  const getTwitchLink = (id?: string): JSX.Element => {
    return (
      <a href={TwitchIdToLink(id)} target="_blank" rel="noopener noreferrer">
        <Text id="text.link">Link</Text>
      </a>
    );
  };

  return (
    <div class={style.flexArea}>
      <div>
        <ProfileImage VTuberId={vtuber.id} imgUrl={vtuber.imgUrl} size={240} />
      </div>
      <ul>
        {vtuber.YouTube && (
          <li>
            <Text id="table.YouTubeSubscriberCount">YouTube Subscribers</Text>
            <span>: </span>
            {CountSpan(vtuber.YouTube.subscriber)}
            <span> (</span>
            {getYouTubeLink(vtuber.YouTube.id)}
            <span>)</span>
          </li>
        )}
        {vtuber.Twitch && (
          <li>
            <Text id="table.TwitchFollowerCount">Twitch Followers</Text>
            <span>: {CountSpan(vtuber.Twitch.follower)} (</span>
            {getTwitchLink(vtuber.Twitch.id)}
            <span>)</span>
          </li>
        )}
        <li>
          <Text id="table.group">Group</Text>
          <span>: </span>
          {vtuber?.group === undefined ? null : (
            <a href={GetRoute({ type: 'group', name: vtuber?.group })}>
              {vtuber?.group}
            </a>
          )}
        </li>
        <li>
          <Text id="table.nationality">Nationality</Text>
          <span>: {vtuber?.nationality}</span>
        </li>
        <li>
          <Text id="table.activity">Activity</Text>
          <span>: </span>
          {getActivityTranslation(vtuber?.activity)}
        </li>
        <li>
          <Text id="table.debutDate">Debut Date</Text>
          <span>: {vtuber?.debutDate}</span>
        </li>
        {vtuber?.graduateDate && (
          <li>
            <Text id="table.graduateDate">Graduation Date</Text>
            <span>: {vtuber?.graduateDate}</span>
          </li>
        )}
        <li>
          <Text id="table.popularVideo">PopularVideo</Text>
          <span>: </span>
          {vtuber.popularVideo && (
            <ShowVideoButton popularVideo={vtuber.popularVideo} />
          )}
        </li>
      </ul>
    </div>
  );
};

export default VTuberInformation;
