<?php

namespace PartKeepr\CoreBundle\Services;

use PartKeepr\CoreBundle\PartKeeprVersion;
use PartKeepr\RemoteFileLoader\RemoteFileLoaderFactory;
use Symfony\Component\Translation\TranslatorInterface;

class VersionService
{
    /**
     * @var SystemNoticeService
     */
    private $systemNoticeService;

    /**
     * @var string
     */
    private $versionURI = 'http://www.partkeepr.org/versions.json';

    /**
     * @var TranslatorInterface
     */
    private $translator;

    /**
     * @var string
     */
    private $version;

    /**
     * @var RemoteFileLoaderFactory
     */
    private $remoteFileLoader;

    public function __construct(SystemNoticeService $systemNoticeService, TranslatorInterface $translator, RemoteFileLoaderFactory $remoteFileLoader)
    {
        $this->systemNoticeService = $systemNoticeService;
        $this->translator = $translator;
        $this->remoteFileLoader = $remoteFileLoader;

        if (PartKeeprVersion::PARTKEEPR_VERSION == '{V_GIT}') {
            $this->setVersion('GIT development version');
        } else {
            $this->setVersion(PartKeeprVersion::PARTKEEPR_VERSION);
        }
    }

    public function setVersion($version)
    {
        $this->version = $version;
    }

    public function getVersion()
    {
        return $this->version;
    }

    public function setVersionURI($versionURI)
    {
        $this->versionURI = $versionURI;
    }

    /**
     * Checks against the versions at partkeepr.org.
     *
     * If a newer version was found, create a system notice entry.
     */
    public function doVersionCheck()
    {
        if ($this->getVersion() === '{V_GIT}') {
            return;
        }
        if (substr($this->getVersion(), 0, 17) === 'partkeepr-nightly') {
            return;
        }

        $latestVersion = $this->getLatestVersion();

        if ($latestVersion === false) {
            return;
        }

        if (version_compare($this->getVersion(), $latestVersion['version'], '<')) {
            $this->systemNoticeService->createUniqueSystemNotice(
                'PARTKEEPR_VERSION_'.$latestVersion['version'],
                $this->translator->trans('New PartKeepr Version %version% available',
                    ['%version%' => $latestVersion['version']]),
                $this->translator->trans('PartKeepr Version %version% changelog:', [
                    '%version%' => $latestVersion['version']."\n\n".
                        $latestVersion['changelog'],
                ])
            );
        }
    }

    public function getLatestVersion()
    {
        $data = $this->remoteFileLoader->createLoader()->load($this->versionURI);
        $versions = json_decode($data, true);

        if (!is_array($versions)) {
            return false;
        }

        $latestVersionEntry = $versions[0];

        if (!array_key_exists('version', $latestVersionEntry)) {
            return false;
        }

        if (!array_key_exists('changelog', $latestVersionEntry)) {
            return ['version' => $latestVersionEntry['version'], 'changelog' => ''];
        } else {
            return ['version' => $latestVersionEntry['version'], 'changelog' => $latestVersionEntry['changelog']];
        }
    }
}
