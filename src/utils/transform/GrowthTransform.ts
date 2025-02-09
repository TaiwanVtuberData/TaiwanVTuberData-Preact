import { VTuberGrowthData } from '../../types/ApiData/VTuberGrowthData';
import { YearEndVTuberTwitchGrowthData } from '../../types/ApiData/YearEndVTuberTwitchGrowthData';
import { YearEndVTuberYouTubeGrowthData } from '../../types/ApiData/YearEndVTuberYouTubeGrowthData';
import { GrowthData } from '../../types/Common/GrowthData';
import {
  GrowthDisplayData,
  VTuberGrowthDisplayData,
} from '../../types/TableDisplayData/VTuberGrowthDisplayData';
import { YearEndVTuberTwitchGrowthDisplayData } from '../../types/TableDisplayData/YearEndVTuberTwitchGrowthDisplayData';
import { YearEndVTuberYouTubeGrowthDisplayData } from '../../types/TableDisplayData/YearEndVTuberYouTubeGrowthDisplayData';
import { VTuberBasicToDisplay } from './BasicTransform';

const growthDataToDisplayData = (
  e: GrowthData,
  subCount?: number,
): GrowthDisplayData => ({
  ...e,
  percentage: subCount !== undefined && subCount !== 0 ? e.diff / subCount : 0,
});

export const VTuberGrowthToDisplay = (
  e: VTuberGrowthData,
): VTuberGrowthDisplayData => ({
  ...VTuberBasicToDisplay(e),
  YouTubeSubscriber: e.YouTube.subscriber,
  _7DaysGrowth: growthDataToDisplayData(
    e.YouTube._7DaysGrowth,
    e.YouTube.subscriber.count,
  ),
  _30DaysGrowth: growthDataToDisplayData(
    e.YouTube._30DaysGrowth,
    e.YouTube.subscriber.count,
  ),
});

export const YearEndVTuberYouTubeGrowthToDisplay = (
  e: YearEndVTuberYouTubeGrowthData,
  ranking: number,
): YearEndVTuberYouTubeGrowthDisplayData => ({
  ...VTuberBasicToDisplay(e),
  YouTubeSubscriber: e.YouTube.subscriber,
  _1YearGrowth: growthDataToDisplayData(
    e.YouTube._1YearGrowth,
    e.YouTube.subscriber.count,
  ),
  ranking: ranking,
});

export const YearEndVTuberTwitchGrowthToDisplay = (
  e: YearEndVTuberTwitchGrowthData,
  ranking: number,
): YearEndVTuberTwitchGrowthDisplayData => ({
  ...VTuberBasicToDisplay(e),
  TwitchFollower: e.Twitch.follower,
  _1YearGrowth: growthDataToDisplayData(
    e.Twitch._1YearGrowth,
    e.Twitch.follower.count,
  ),
  ranking: ranking,
});
