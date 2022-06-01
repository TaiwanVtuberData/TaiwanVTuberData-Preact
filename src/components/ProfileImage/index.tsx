import { FunctionalComponent, h } from 'preact';
import { openProfileModal } from '../../global/ProfileModalState';
import { GetRoute } from '../../utils/TypeSafeRouting';
import style from './style.module.css';

export interface ProfileImageProps {
  VTuberId: string;
  imgUrl?: string;
  size?: number;
}

const ProfileImage: FunctionalComponent<ProfileImageProps> = (
  props: ProfileImageProps
): h.JSX.Element => {
  // use empty img src if no URL
  // https://stackoverflow.com/a/53365710/11947017
  return (
    <a
      href={GetRoute({ type: 'vtuber', id: props.VTuberId })}
      onClickCapture={(e): void => e.preventDefault()}
    >
      <div
        onClick={(e): void => {
          openProfileModal(props.VTuberId);
          e.stopPropagation();
        }}
      >
        <img
          class={`${props.size ? style.fixedSize : style.profileImg}`}
          src={
            props.imgUrl ??
            'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
          }
          loading="lazy"
          width={props.size ?? undefined}
          height={props.size ?? undefined}
        />
      </div>
    </a>
  );
};

export default ProfileImage;
